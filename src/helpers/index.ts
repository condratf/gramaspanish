import type { AstroGlobal } from "astro";
import { Lang } from "src/types";

export function getCurrLang(Astro: AstroGlobal): Lang {
  return Astro.url.pathname.includes('/ru')
    ? Lang.ru : Astro.url.pathname.includes('/es')
      ? Lang.es : Lang.en
}