import ac from "@/assets/images/vehicles/ac.webp";
import acStaro from "@/assets/images/vehicles/ac_staro.webp";
import gv1 from "@/assets/images/vehicles/gv1.webp";
import gvStaro from "@/assets/images/vehicles/gv_staro.webp";
import gvStaro1 from "@/assets/images/vehicles/gv_staro1.webp";
import gvStaro2 from "@/assets/images/vehicles/gv_staro2.webp";
import gvc1 from "@/assets/images/vehicles/gvc1.webp";
import gvc1635 from "@/assets/images/vehicles/gvc1635.webp";
import gvm from "@/assets/images/vehicles/gvm.webp";
import mbStaro1 from "@/assets/images/vehicles/mb_staro1.webp";
import mbStaro2 from "@/assets/images/vehicles/mb_staro2.webp";

import type { ImageMetadata } from "astro";

interface Vehicle {
  name: string;
  image: ImageMetadata;
  details: string[];
  description: string;
}

export const operativeVehicles: Vehicle[] = [
  {
    name: "Gasilsko vozilo s cisterno (GVC-1)",
    image: gvc1,
    details: [
      "Podvozje: MAN 13.290 (2021)",
      "Nadgradnja: Wiss (2023)",
      "Posadka vozila: 1 + 7",
      "Črpalka: Ruberg - 2500 l/min",
      "Prostornina rezervoarja: 2600 litrov",
    ],
    description:
      "Vozilo je namenjeno gašenju in reševanju pri požarih in manjših tehničnih intervencijah. Značilnosti vozila so večja količina vode v rezervoarju in možnosti izvedbe hitrega napada.",
  },
  {
    name: "Gasilsko vozilo za moštvo (GVM)",
    image: gvm,
    details: [
      "Podvozje: Volkswagen Transporter (2016)",
      "Nadgradnja: Premier Adria (2017)",
      "Posadka vozila: 1 + 8",
    ],
    description: "Vozilo je namenjeno prevozu gasilcev in osebne opreme.",
  },
  {
    name: "Avtocisterna (AC 16/50)",
    image: ac,
    details: [
      "Podvozje: Mercedes Benz 1529 (2006)",
      "Nadgradnja: Elektro Turnšek (2007) / Rosenbauer (2023)",
      "Posadka vozila: 1 + 2",
      "Črpalka: Turboinštitut - 1600 l/min",
      "Prostornina rezervoarja: 6300 litrov",
    ],
    description:
      "Vozilo je zaradi večje količine vode namenjeno oskrbi požarišča z vodo in prevozu pitne vode.",
  },
  {
    name: "Orodno gasilsko vozilo (GV-1)",
    image: gv1,
    details: [
      "Podvozje: Mercedes Benz Sprinter 414 (2001)",
      "Nadgradnja: Gasilska vozila Pušnik (2001)",
      "Posadka vozila: 1+8",
      "Črpalka: Prenosna motorna brizgalna Rosenbauer 8/8",
    ],
    description:
      "Vozilo je namenjeno gašenju požarov, prevozu moštva, orodja in opreme na kraj intervencije.",
  },
  {
    name: "Gasilsko vozilo s cisterno (GVC 16/35)",
    image: gvc1635,
    details: [
      "Podvozje: Marcedes Benz 1324 (1992)",
      "Nadgradnja: Gasilska vozila Pušnik (1997)",
      "Posadka vozila: 1+5",
      "Črpalka: Rosenbauer NH20 - 2000 l/min",
      "Prostornina rezervoarja: 3400 litrov",
      "Vozilo ima dva hitronapadalna navijaka.",
    ],
    description:
      "Vozilo je namenjeno gašenju in reševanju pri požarih in manjših tehničnih intervencijah. Značilnosti vozila so večja količina vode v rezervoarju in možnosti izvedbe hitrega napada.",
  },
];

export const historicVehicles = [
  {
    name: "Orodno gasilsko vozilo",
    image: gvStaro,
    details: [
      "Podvozje: TAM 75 T 5 (1979)",
      "Nadgradnja: Karoserist Maribor",
      "Črpalka: Prenosna motorna brizgalna Rosenbauer 8/8",
    ],
    description:
      "Vozilo je bilo namenjeno gašenju požarov, prevozu moštva, orodja in opreme na kraj intervencije.",
  },
  {
    name: "Avtocisterna",
    image: acStaro,
    details: [
      "Podvozje: TAM 110 T 10 (1977)",
      "Nadgradnja: Karoserist Maribor",
      "Črpalka: Turboinštitut - 1600 l/min",
      "Prostornina rezervoarja: 5000 litrov",
    ],
    description:
      "Vozilo je bilo zaradi večje količine vode namenjeno oskrbi požarišča z vodo in prevozu pitne vode.",
  },
  {
    name: "Gasilsko vozilo",
    image: gvStaro1,
    details: ["Podvozje: IMV 1600 Super B", "Nadgradnja: Karoserist Maribor"],
    description:
      "Vozilo je bilo namenjeno prevozu moštva, orodja in opreme na kraj intervencije.",
  },
  {
    name: "Gasilsko vozilo",
    image: gvStaro2,
    details: ["Podvozje: Ford BB"],
    description: "",
  },
  {
    name: "Motorna brizgalna Rosenbauer",
    image: mbStaro1,
    details: [
      "Tip: vprežna motorna brizgalna",
      "Model: Mojstrana",
      "Leto izdelave: 1913",
      "Posadka: 6 sedežev na sprednjem kozlu",
      "Motorni agregat: Austro-Fiat, vodno hlajen, 8-9 konjskih moči pri 2400 obratih na minuto",
      "Črpalka: 400-450 l/min, na višini 60 m je pretok 350 l/m in višina curka 38 m",
    ],
    description: "",
    note: "Od 4 edina ohranjena in delujoča na slovenskem.",
  },
  {
    name: "Motorna brizgalna R. A. Smrekal",
    image: mbStaro2,
    details: [
      "Tip: vprežna ročna brizgalna",
      "Leto izdelave: 1898",
      "Leto prodaje: 1954 - PGD Veliki Cirnik",
      "Ročni pogon: minimalno 4 osebe",
    ],
    description: "",
  },
];
