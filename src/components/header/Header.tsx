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
      <div className={style.name}>MICHAEL</div>
      <div className={style.aboutMeContainer}>
        <div className={style.textPosition}></div>
        <h1 className={style.aboutMeTitle}>ABOUT ME</h1>
        <p className={style.aboutMePara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      </div>
    </header>
  )
}

export default Header
