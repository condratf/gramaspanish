import { Text, db, like } from "astro:db";

export function getAboutPageTranslations() {
  return ({
    title: {
      en: 'About',
      es: 'Nosotros',
      ru: 'О нас'
    },
    goals: {
      en: 'Achieve your goals',
      es: 'Alcanza tus objetivos',
      ru: 'Достигните ваших целей'
    }
  })
}

export async function getAboutTexts() {
  const about = await db
    .select()
    .from(Text)
    .where(
      like(Text.name, "about%")
    )

  const top = about.find(v => v.name.includes('top'))
  const bottom = about.find(v => v.name.includes('bottom'))
  const points = about.find(v => v.name.includes('points'))

  return ({
    top: {
      en: top?.content || '',
      es: top?.contentEs || '',
      ru: top?.contentRu || '',
    },
    bottom: {
      en: bottom?.content || '',
      es: bottom?.content || '',
      ru: bottom?.content || '',
    },
    points: {
      en: points?.content || '',
      es: points?.content || '',
      ru: points?.content || '',
    },
  })
}