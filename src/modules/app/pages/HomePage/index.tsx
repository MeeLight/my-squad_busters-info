import { FormEvent, useState } from 'react'

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Controllers
import { onSubmit, onChange } from '@app/controllers/form'

// Layouts
import BodyLayout from '@core/layouts/BodyLayout'

// Components
import Input from '@core/components/Input'
import Button from '@core/components/Button'
import RowContainer from '@core/components/RowContainer'
import ColContainer from '@core/components/ColContainer'

// Icons
import { SearchIcon } from '@core/icons/repo'

// Images
import chickenClassicWebp from '@images/chicken_classic.webp'

// Styles
import styles from './index.module.css'

export default function HomePage() {
  const navigate = useNavigate()

  // States
  const [playerId, setPlayerId] = useState('')

  return (
    <BodyLayout customClassName={styles.layout}>
      <RowContainer customClassName={styles.rowContainer}>
        <img
          src={chickenClassicWebp}
          alt='Chicken Classic'
          className={styles.image}
        />
      </RowContainer>

      <ColContainer customClassName={styles.colContainer}>
        <h1 className={styles.title}>Find my account:</h1>

        <form
          onSubmit={event => onSubmit(event)(playerId, navigate)}
          className={styles.form}
        >
          <Input
            type='text'
            name='player_id'
            id='player_id_field'
            value={playerId}
						placeholder='Your ID'
            onChange={event => onChange(event)(setPlayerId)}
            required
          />

          <Button type='submit'>
            <SearchIcon fill='#ffffff' />
          </Button>
        </form>
      </ColContainer>
    </BodyLayout>
  )
}
