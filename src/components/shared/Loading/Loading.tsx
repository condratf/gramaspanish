import { type FC } from 'react'
// styles
import styles from './Loading.module.scss'

export const Loading: FC = () => {
  return (
    <div className={styles.loadingContainer} aria-label='loading'>
      <div className={styles.spinner} />
    </div>
  )
}
