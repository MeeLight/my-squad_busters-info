// Components
import { NavLink as NavLinkRouter } from 'react-router-dom'

// Styles
import styles from './index.module.css'

// Types and interfaces
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

interface IProps {
  customActiveClassName?: string
  customClassName?: string
  children: string | ReactNode
}

type Props = IProps & ComponentPropsWithoutRef<typeof NavLinkRouter>

export default function NavLink({
  customActiveClassName = '',
  customClassName = '',
  children,
  ...rest
}: Props) {
  return (
    <li role='listitem' className={styles.navElement}>
      <NavLinkRouter
        className={({ isActive }) =>
          isActive ?
            `${styles.isActive} ${customActiveClassName}`
          : customClassName
        }
        {...rest}
      >
        {children}
      </NavLinkRouter>
    </li>
  )
}
