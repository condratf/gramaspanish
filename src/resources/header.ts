import en from "./assets/uk.svg";
import ru from "./assets/ru.svg";
import es from "./assets/es.svg";
import type { Lang } from "src/types";

export const getHeaderItems = () => {
  return {
    home: {
      translations: {
        en: "Home",
        es: "Inicio",
        ru: "Главная",
      },
      href: '/'
    },
    about: {
      translations: {
        en: "About",
        es: "Nosotros",
        ru: "О нас",
      },
      href: '/about'
    },
    contacts: {
      translations: {
        en: "Contact",
        es: "Contacto",
        ru: "Контакты",
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