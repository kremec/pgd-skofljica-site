import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { gzipSync } from "node:zlib";

const dist = "dist";
const budget = 14 * 1024;

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  });

const gzipSize = (path) => gzipSync(readFileSync(path)).length;
const routeName = (path) => {
  const route = relative(dist, path);
  if (route === "index.html") return "/";
  if (route.endsWith("/index.html")) return `/${dirname(route)}/`;
  return `/${route}`;
};

let failed = false;

for (const htmlPath of walk(dist).filter((path) => path.endsWith(".html"))) {
  const html = readFileSync(htmlPath, "utf8");
  const assets = [
    ...html.matchAll(/(?:href|src)="(\/_astro\/[^"]+\.(?:css|js))"/g),
  ].map((match) => join(dist, match[1]));
  const total = [htmlPath, ...new Set(assets)]
    .filter((path) => statSync(path, { throwIfNoEntry: false })?.isFile())
    .reduce((sum, path) => sum + gzipSize(path), 0);
  const ok = total <= budget;

  failed ||= !ok;
  console.log(`${ok ? "OK" : "FAIL"} ${routeName(htmlPath)} ${total} bytes`);
}

if (failed) process.exitCode = 1;
