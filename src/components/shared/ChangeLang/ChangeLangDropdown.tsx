import { getRelativeLocaleUrl } from 'astro:i18n';
import { useEffect, useRef, useState, type FC } from 'react'
import { getLanguageItems } from 'src/resources/header';
import type { Lang } from 'src/types';
import styles from './ChangeLang.module.scss'

export const ChangeLangDropdown: FC<{
  preparedPathName: string,
  locale: Lang
}> = ({
  preparedPathName,
  locale
}) => {
    const languageItems = getLanguageItems();
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node))
          setIsOpen(false)
      };

      document.addEventListener('click', handleClickOutside, true)
      return () => document.removeEventListener('click', handleClickOutside, true)
    }, [])

    return (
      <nav ref={ref} className={styles["dropdown"]}>
        <button onClick={() => setIsOpen(v => !v)} className={styles["dropdown-button"]}>
          <img width={25} height={17} src={languageItems[locale].image.src || ''} alt={`lang-${locale}`} />
        </button>
        <div className={`${styles['dropdown-menu']} ${isOpen ? '' : styles['hidden']}`}>
          {
            Object.values(languageItems).map(({ image, title, short, lang }) => lang !== locale && (
              <a
                href={getRelativeLocaleUrl(lang, preparedPathName)}
                title={title}
                aria-label={title}
                key={lang}
              >
                {/* <span>{short}</span> */}
                <img width={25} height={17} src={image.src} alt={`lang-${lang}`} />
              </a>
            ))
          }
        </div>
      </nav>
    )
  }
