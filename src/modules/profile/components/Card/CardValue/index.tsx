// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface IProps {
  value: string | ReactNode
  customClassName?: string
  isDefaultComponent?: boolean
}

type Props = IProps & ComponentPropsWithoutRef<'strong'>

export default function CardValue({
  value,
  customClassName = '',
  isDefaultComponent = true,
  ...rest
}: Props) {
  if (isDefaultComponent) {
    return (
      <strong className={`${styles.cardValue} ${customClassName}`} {...rest}>
        {value}
      </strong>
    )
  }

  return value as ReactNode
}
