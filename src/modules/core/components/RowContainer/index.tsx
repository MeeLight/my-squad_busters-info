// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
}

type Props = IProps & ComponentPropsWithoutRef<'section'>

export default function RowContainer({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <section className={`${styles.rowContainer} ${customClassName}`} {...rest}>
      {children}
    </section>
  )
}
