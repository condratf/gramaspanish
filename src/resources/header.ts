import en from "./assets/uk.svg";
import ru from "./assets/ru.svg";
import es from "./assets/es.svg";

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
    en: {
      title: 'English',
      short: 'en',
      lang: 'en',
      image: en,
    },
    ru: {
      title: 'Русский',
      short: 'ру',
      lang: 'ru',
      image: ru,
    },
    es: {
      title: 'Español',
      short: 'es',
      lang: 'es',
      image: es,
    },
  }
}