import type { AstroGlobal } from "astro";
import type { Lang } from "src/types";

export function getCurrLang(Astro: AstroGlobal): Lang {
  return Astro.url.pathname.includes('/ru')
    ? 'ru' : Astro.url.pathname.includes('/es')
      ? 'es' : 'en'
}