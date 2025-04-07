// Components
import Link from '@core/components/Link'

// Images
import archerStickerWebp from '@images/archer_sticker.webp'

// Styles
import styles from './index.module.css'
import { BackIcon } from '@core/icons/repo'

interface IProps {
  errorMessage: string | undefined
}

export default function ErrorMessageContainer({ errorMessage = '' }: IProps) {
  return (
    <section className={styles.errorMessageSection}>
      <img
        src={archerStickerWebp}
        className={styles.image}
        alt='archer_sticker'
      />

      <p className={styles.message}>Oops! {errorMessage}</p>

      <Link to='/' className={styles.link}>
        <BackIcon fill='var(--msbi-primary)' />
        <span>Back to home</span>
      </Link>
    </section>
  )
}
