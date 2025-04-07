// Styles
import styles from '@styleModules/centeredBody.module.css'
import selfStyles from './index.module.css'

// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
}

type Props = IProps & ComponentPropsWithoutRef<'div'>

export default function Card({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <div
      className={`${styles.centeredBody} ${selfStyles.card} ${customClassName}`}
      {...rest}
    >
      {children}
    </div>
  )
}
