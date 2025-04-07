// Styles
import styles from '@styleModules/centeredBody.module.css'

// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
}

type Props = IProps & ComponentPropsWithoutRef<'div'>

export default function CenterLayout({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <div className={`${styles.centeredLayout} ${customClassName}`} {...rest}>
      {children}
    </div>
  )
}
