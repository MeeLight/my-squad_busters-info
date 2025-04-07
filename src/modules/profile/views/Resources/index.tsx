// Components
import Card from './../../components/Card'
import CardHeader from '@profile/components/Card/CardHeader'
import RowContainer from '@core/components/RowContainer'
import ColContainer from '@core/components/ColContainer'
import CardSubtitle from '@profile/components/Card/CardSubtitle'
import CardValue from '@profile/components/Card/CardValue'
import CardImage from '@profile/components/Card/CardImage'

// Images
import gemsWebp from '@images/gems.webp'
import hammerWebp from '@images/hammer.webp'
import starTokenWebp from '@images/star_token.webp'
import ticketWebp from '@images/ticket.webp'
import pinataSticksWebp from '@images/pinata_sticks.webp'

// Styles
import styles from './index.module.css'

// Types and interfaces
interface IProps {
  hammers: string
  tickets: string
  gemsThisSeason: string
  pinataSticks: string
  starTokens: string
}

export default function ResourcesView({
  hammers,
  tickets,
  starTokens,
  gemsThisSeason,
  pinataSticks
}: IProps) {
  return (
    <Card customClassName={styles.card}>
      <CardHeader title='Resources' customClassName={styles.title} />

      <RowContainer>
        {/* Gems */}
        <ColContainer customClassName={styles.colContainer}>
          <CardSubtitle
            subtitle='Gems of this Season:'
            customClassName={styles.subtitle}
          />

          <RowContainer customClassName={styles.rowContainer}>
            <CardImage
              imageUrl={gemsWebp}
              alt='Gem'
              style={{ transform: 'scale(1.7)' }}
            />
            <CardValue value={gemsThisSeason} />
          </RowContainer>
        </ColContainer>

        {/* Pinata Sticks */}
        <ColContainer customClassName={styles.colContainer}>
          <CardSubtitle
            subtitle='Pinata Sticks:'
            customClassName={styles.subtitle}
          />

          <RowContainer customClassName={styles.rowContainer}>
            <CardImage
              imageUrl={pinataSticksWebp}
              alt='pinataSticks'
              style={{ width: '3.2rem' }}
            />
            <CardValue value={pinataSticks} />
          </RowContainer>
        </ColContainer>

        {/* Hammers */}
        <ColContainer customClassName={styles.colContainer}>
          <CardSubtitle subtitle='Hammers:' customClassName={styles.subtitle} />

          <RowContainer customClassName={styles.rowContainer}>
            <CardImage imageUrl={hammerWebp} alt='Hammer' />
            <CardValue value={hammers} />
          </RowContainer>
        </ColContainer>
      </RowContainer>

      <RowContainer style={{ justifyContent: 'space-evenly' }}>
        {/* Star Tokens */}
        <ColContainer customClassName={styles.colContainer}>
          <CardSubtitle
            subtitle='Star Tokens:'
            customClassName={styles.subtitle}
          />

          <RowContainer customClassName={styles.rowContainer}>
            <CardImage imageUrl={starTokenWebp} alt='Star Token' />
            <CardValue value={starTokens} />
          </RowContainer>
        </ColContainer>

        {/* Tickets */}
        <ColContainer customClassName={styles.colContainer}>
          <CardSubtitle subtitle='Tickets:' customClassName={styles.subtitle} />

          <RowContainer customClassName={styles.rowContainer}>
            <CardImage
              imageUrl={ticketWebp}
              alt='Ticket'
              style={{ transform: 'rotateZ(-22deg)' }}
            />
            <CardValue value={tickets} />
          </RowContainer>
        </ColContainer>
      </RowContainer>
    </Card>
  )
}
