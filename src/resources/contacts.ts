export function getContactsInfo() {
  return ({
    gmail: 'gramaspanish@gmail.com',
    instagram: 'https://www.instagram.com/gramaspanish/',
    telegram: 'https://t.me/gramaspanish',
    socialMedia: '@gramaspanish'
  }) as const
}

export function getContactFormTranslations() {
  return ({
    name: {
      en: "Name",
      es: "Nombre",
      ru: "Имя"
    },
    email: {
      en: "Email",
      es: "Correo electrónico",
      ru: "Электронная почта"
    },
    phone: {
      en: "Phone",
      es: "Teléfono",
      ru: "Телефон"
    },
    text: {
      en: "Message",
      es: "Mensaje",
      ru: "Сообщение"
    },
    submit: {
      en: "Submit",
      es: "Enviar",
      ru: "Отправить"
    }
  })
}