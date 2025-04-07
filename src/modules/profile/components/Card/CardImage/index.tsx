// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface IProps {
  imageUrl: string | ReactNode
  customClassName?: string
  isDefaultComponent?: boolean
}

type Props = IProps & ComponentPropsWithoutRef<'img'>

export default function CardImage({
  imageUrl,
  customClassName = '',
  isDefaultComponent = true,
  ...rest
}: Props) {
  if (isDefaultComponent) {
    return (
      <img
        src={imageUrl as string}
        className={`${styles.image} ${customClassName}`}
        {...rest}
      />
    )
  }

  return imageUrl as ReactNode
}
