import { useState } from 'react'

// Components
import NavBrand from './../NavBrand'
import NavLink from './../NavLink'

// Styles
import styles from './index.module.css'

// Types and interfaces
import type { Dispatch, SetStateAction } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

type Props = IProps & ComponentPropsWithoutRef<'div'>

export default function NavDrawer({ setIsOpen, isOpen, ...rest }: Props) {
  const [overlayHiddenClass, setOverlayHiddenClass] = useState('')
  const [drawerHiddenClass, setDrawerHiddenClass] = useState('')
  const [listHiddenClass, setListHiddenClass] = useState('')
  const [itemHiddenClass, setItemHiddenClass] = useState('')
  const [ativeHiddenClass, setActiveHiddenClass] = useState('')

  return (
    <>
      <div
        className={`${isOpen ? styles.overlay : styles.overlayHidden} ${overlayHiddenClass}`}
        onClick={() => {
          setOverlayHiddenClass(styles.overlayHidden)
          setDrawerHiddenClass(styles.navDrawerHidden)
          setListHiddenClass(styles.drawerListHidden)
          setItemHiddenClass(styles.drawerListItemHidden)
          setActiveHiddenClass(styles.drawerActiveListItemHidden)
        }}
        {...rest}
      ></div>

      <ul
        role='list'
        className={`${isOpen ? styles.navDrawer : styles.navDrawerHidden} ${drawerHiddenClass}`}
      >
        <NavBrand
          to='/'
          onClick={() => setIsOpen(false)}
          customClassName={styles.drawerNavBrand}
        >
          | My Squad Busters Info
        </NavBrand>

        <div
          className={`${isOpen ? styles.drawerList : styles.drawerListHidden} ${listHiddenClass}`}
        >
          <NavLink
            to='/'
            onClick={() => setIsOpen(false)}
            customClassName={`${isOpen ? styles.drawerListItem : styles.drawerListItemHidden} ${itemHiddenClass}`}
            customActiveClassName={`${isOpen ? styles.drawerActiveListItem : styles.drawerActiveListItemHidden} ${ativeHiddenClass}`}
          >
            Home
          </NavLink>

          <NavLink
            to='/about'
            onClick={() => setIsOpen(false)}
            customClassName={`${isOpen ? styles.drawerListItem : styles.drawerListItemHidden} ${itemHiddenClass}`}
            customActiveClassName={`${isOpen ? styles.drawerActiveListItem : styles.drawerActiveListItemHidden} ${ativeHiddenClass}`}
          >
            About
          </NavLink>
        </div>
      </ul>
    </>
  )
}
