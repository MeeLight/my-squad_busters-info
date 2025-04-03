import { useEffect, useState } from 'react'

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Components
import Input from '@core/components/Input'
import Button from '@core/components/Button'

// Types and interfaces
import type { FormEvent } from 'react'

// Stylesheet
import styles from './index.module.css'

export default function HomePage() {
  const navigate = useNavigate()

  // States
  const [playerId, setPlayerId] = useState('16-2507692')

  // Events
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (playerId === '') return

    try {
      //console.log('Submit!', { playerId })
      navigate(`/profile?id=${encodeURIComponent(playerId)}`)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    //console.log('Hello world!')
  }, [])

  /* useEffect(() => {
    console.log(fields)
  }, [fields]) */

  return (
    <>
      <h1>Seach your account:</h1>

      <form onSubmit={event => onSubmit(event)} className={styles.form}>
        <Input
          type='text'
          name='player_id'
          id='player_id_field'
          value={playerId}
          autoComplete='off'
          onChange={event => {
            const value = event.target.value
            setPlayerId(value)
          }}
        />

        <Button type='submit'>Search</Button>
      </form>
    </>
  )
}
