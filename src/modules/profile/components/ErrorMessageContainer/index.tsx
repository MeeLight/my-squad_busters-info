// Components
import Link from '@core/components/Link'

// Stickers
import { ArcherSticker } from '@core/icons/game/stickers'

// Styles
import styles from './index.module.css'
import { BackIcon } from '@core/icons/repo'

interface IProps {
  errorMessage: string | undefined
}

export default function ErrorMessageContainer({ errorMessage = '' }: IProps) {
  return (
    <section className={styles.errorMessageSection}>
      <ArcherSticker />
      <p className={styles.message}>Oops! {errorMessage}</p>

      <Link to='/' className={styles.link}>
        <BackIcon fill='var(--msbi-primary)' />
        <span>Back to home</span>
      </Link>
    </section>
  )
}
