// Components
import Card from './../../components/Card'
import CardHeader from '@profile/components/Card/CardHeader'
import RowContainer from '@core/components/RowContainer'
import ColContainer from '@core/components/ColContainer'
import CardSubtitle from '@profile/components/Card/CardSubtitle'
import CardValue from '@profile/components/Card/CardValue'
import CardImage from '@profile/components/Card/CardImage'

// Images
import trophyWebp from '@images/trophy.webp'

// Icons
import { XpIcon } from '@core/icons/game/resources'

// Styles
import styles from './index.module.css'

interface IProps {
  profileName: string | undefined
  level: string | undefined
  trophies: string | undefined
}

export default function MainContentView({
  level,
  trophies,
  profileName = ''
}: IProps) {
  return (
    <Card customClassName={styles.card}>
      <CardHeader title='My Profile' />

      <RowContainer>
        <ColContainer customClassName={styles.xpContainer}>
          <XpIcon className={styles.xpIcon} />
          <CardValue customClassName={styles.level} value={`Lvl ${level}`} />
        </ColContainer>

        <ColContainer customClassName={styles.infoColContainer}>
          <article>
            <CardSubtitle subtitle='Username:' />
            <CardValue value={profileName} />
          </article>

          <ColContainer customClassName={styles.trophiesColContainer}>
            <CardSubtitle subtitle='Trophies:' />

            <RowContainer customClassName={styles.trophiesRowContainer}>
              <CardImage imageUrl={trophyWebp} alt='Trophies' />
              <CardValue value={trophies} />
            </RowContainer>
          </ColContainer>
        </ColContainer>
      </RowContainer>
    </Card>
  )
}
