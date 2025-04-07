import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import type { NavigateFunction } from 'react-router-dom'

export const onSubmit =
  (event: FormEvent<HTMLFormElement>) =>
  (id: string, navigate: NavigateFunction) => {
    event.preventDefault()

    if (id === '') return

    try {
      navigate(`/profile?id=${encodeURIComponent(id)}`)
    } catch (error) {
      console.error(error)
    }
  }

export const onChange =
  (event: ChangeEvent<HTMLInputElement>) =>
  (setPlayerId: Dispatch<SetStateAction<string>>) => {
    const value = event.target.value
    setPlayerId(value)
  }
