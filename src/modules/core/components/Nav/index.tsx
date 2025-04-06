// Hooks
import { useState } from 'react'

// Components
import NavBrand from './NavBrand'
import NavMenu from './NavMenu'
import NavDrawer from './NavDrawer'
import NavList from './NavList'
import NavLink from './NavLink'

// Icons
import { MenuNavigationGridIcon } from '@core/icons/repo'

// Styles
import styles from './index.module.css'

// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'nav'>

export default function Nav({ ...rest }: Props) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  return (
    <nav className={styles.nav} {...rest}>
      <NavMenu>
        <MenuNavigationGridIcon
          fill='#f26bc9'
          onClick={() => setIsOpenDrawer(true)}
        />
      </NavMenu>

      <NavBrand to='/'>| My Squad Busters Info</NavBrand>

      <NavList>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </NavList>

      <NavDrawer
        isOpen={isOpenDrawer}
        setIsOpen={setIsOpenDrawer}
        onClick={() => setIsOpenDrawer(false)}
      />
    </nav>
  )
}
