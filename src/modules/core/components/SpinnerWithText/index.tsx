// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface IProps {
  spinner: ReactNode
  text: string | ReactNode
  defaultTextComponent: boolean
  isReverseComponents?: boolean
}

type Props = IProps & ComponentPropsWithoutRef<'div'>

export default function SpinnerWithText({
  spinner,
  text,
  defaultTextComponent,
  isReverseComponents = false
}: Props) {
  const isReverseClass = isReverseComponents ? styles.isReverseComponents : ''

  return (
    <div className={`${styles.container} ${isReverseClass}`.trim()}>
      {spinner}
      {defaultTextComponent ?
        <p className={styles.message}>{text}</p>
      : text}
    </div>
  )
}
