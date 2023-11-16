import type React from 'react'
import { headerImages } from '@assets/images'

import style from './Header.module.scss'

const { headerSml, headerMed, headerLrg } = headerImages

const Header: React.FC = () => {
  return (
    <header className={style.headerContainer}>
      <img
        className={style.headerImage}
        src={headerSml}
        srcSet={`${headerSml} 500w, ${headerMed} 640w, ${headerLrg} 1000w`}
        alt="Image of a businessman"
      />
    </header>
  )
}

export default Header
