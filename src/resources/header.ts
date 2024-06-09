import en from "./assets/uk.svg";
import ru from "./assets/ru.svg";
import es from "./assets/es.svg";
import type { Lang } from "src/types";

export const getHeaderItems = () => {
  return {
    home: {
      translations: {
        en: "home",
        es: "inicio",
        ru: "главная",
      },
      href: '/'
    },
    about: {
      translations: {
        en: "about",
        es: "nosotros",
        ru: "о нас",
      },
      href: '/about'
    },
    contacts: {
      translations: {
        en: "contact",
        es: "contacto",
        ru: "контакты",
      },
      href: '/contacts'
    },
  };
}

export const getLanguageItems = () => {
  return {
    ru: {
      title: 'Русский',
      short: 'ру',
      lang: 'ru' as Lang,
      image: ru,
    },
    en: {
      title: 'English',
      short: 'en',
      lang: 'en' as Lang,
      image: en,
    },
    es: {
      title: 'Español',
      short: 'es',
      lang: 'es' as Lang,
      image: es,
    },
  }
}