import type React from 'react'

import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.textContainer}>
        <h1 className={style.footerTitle}>Contact Me!</h1>
        <p className={style.footerPara}> </p>
        <div className={style.contactDetailsContainer}>
          <p className={style.contactDetail}>
            <span className={style.contactIcon}></span> {/* email */}
          </p>
          <p className={style.contactDetail}>
            <span className={style.contactIcon}></span> {/* phone */}
          </p>
        </div>
        <div className={style.iconContainer}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
        </div>
      </div>
      <div className={style.imageContainer}></div>
    </footer>
  )
}

export default Footer
