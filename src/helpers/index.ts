import * as fs from 'fs';
import * as path from 'path';
import type { AstroGlobal } from "astro";
import { Lang } from "src/types";

export function getCurrLang(Astro: AstroGlobal): Lang {
  return Astro.url.pathname.includes('/ru/')
    ? Lang.ru : Astro.url.pathname.includes('/es/')
      ? Lang.es : Lang.en
}

export function getPagesNames(): Array<string> {
  const directoryPath = './src/pages/[lang]'
  let fileList: Array<string> = []

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      throw Error('Unable to scan directory: ' + err)
    }

    const astroFiles = files.filter(file => path.extname(file) === '.astro')
    fileList = astroFiles.map(file => {
      const fileNameWithoutExtension = path.basename(file, path.extname(file))
      return fileNameWithoutExtension
    })

    console.log(fileList)
  })

  return fileList
}

export function arrayRange(start: number = 0, stop: number = 10, step: number = 1): number[] {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );
}

export function getRatingStars(rating: number) {
  return arrayRange(1, 5).map(v => {
    if (v < rating + 1) return (`🌟`)
    return (`✰`)
  })
}