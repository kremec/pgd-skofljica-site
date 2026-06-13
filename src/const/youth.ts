import youth1 from "@/assets/images/youth/mladina_1.webp";
import youth2 from "@/assets/images/youth/mladina_2.webp";
import youth3 from "@/assets/images/youth/mladina_3.webp";
import youth4 from "@/assets/images/youth/mladina_4.webp";
import youth5 from "@/assets/images/youth/mladina_5.webp";
import youth6 from "@/assets/images/youth/mladina_6.webp";
import youth7 from "@/assets/images/youth/mladina_7.webp";
import youth8 from "@/assets/images/youth/mladina_8.webp";

import type { ImageMetadata } from "astro";

interface YouthImage {
  img: ImageMetadata;
  title: string;
}

export const youthImages: YouthImage[] = [
  {
    img: youth1,
    title: "Uspeh mladincev na gasilskem kvizu",
  },
  {
    img: youth2,
    title: "Na startu gasilske orientacije",
  },
  {
    img: youth3,
    title: "Vaja z vedrovko",
  },
  {
    img: youth4,
    title: "Vaja z vozli",
  },
  {
    img: youth5,
    title: "Spoznavanje izolirnih dihalnih aparatov",
  },
  {
    img: youth6,
    title: "Zaključni izlet v adrenalinskem parku",
  },
  {
    img: youth7,
    title: "Še ena gasilska",
  },
  {
    img: youth8,
    title: "Spoznavanje gasilnih aparatov",
  },
];
