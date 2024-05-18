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

