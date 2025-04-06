// Layouts
import BodyLayout from '@core/layouts/BodyLayout'

// Icons
import { XpIcon } from '@core/icons/game/resources'

// Styles
import styles from './index.module.css'

interface IProps {
  profileName: string | undefined
  level: string | undefined
}

export default function MainContent({ level, profileName = '' }: IProps) {
  return (
    <BodyLayout customClassName={styles.base}>
      <h1 className={styles.title}>My Profile</h1>

      <section className={styles.container}>
        <article
          className={`${styles.columnContainer} ${styles.xpContainer}`.trim()}
        >
          <XpIcon className={styles.xpIcon} />
          <p className={styles.level}>Lvl {level}</p>
        </article>

        <article className={styles.columnContainer}>
          <small className={styles.smallSubtitle}>Username:</small>
          <h2 className={styles.subtitle}>{profileName}</h2>
        </article>
      </section>
    </BodyLayout>
  )
}
