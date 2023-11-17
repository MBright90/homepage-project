import type React from 'react'
import { headerImages } from '@assets/images'

import style from './Header.module.scss'

const { headerSml, headerMed, headerLrg } = headerImages

const Header: React.FC = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.headerImage}
          src={headerSml}
          srcSet={`${headerSml} 500w, ${headerMed} 640w, ${headerLrg} 1000w`}
          alt="Image of a businessman"
        />
        <div className={style.backgroundSlant}></div>
      </div>
      <div className={style.name}>MICHAEL</div>
      <div className={style.aboutMeContainer}></div>
    </header>
  )
}

export default Header
