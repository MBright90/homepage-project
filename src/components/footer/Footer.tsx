import type React from 'react'
import { footerSml } from '@assets/images'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.textContainer}>
        <h1 className={style.footerTitle}>Contact Me!</h1>
        <p className={style.footerPara}>
          Please get in touch if you think our work could be mutually beneficial
        </p>
        <div className={style.contactDetailsContainer}>
          <p className={style.contactDetail}>
            <span className={style.contactIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            this-is-an-email@example.com
          </p>
          <p className={style.contactDetail}>
            <span className={style.contactIcon}>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            07777 999777
          </p>
        </div>
        <div className={style.iconContainer}>
          <a href="www.twitter.com">
            <i className={`devicon-twitter-original ${style.iconLink}`}></i>
          </a>
          <a href="www.linkedIn.com">
            <i className={`devicon-linkedin-plain ${style.iconLink}`}></i>
          </a>
          <a href="www.github.com">
            <i className={`devicon-github-original ${style.iconLink}`}></i>
          </a>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={footerSml} alt="image of a business man outside" />
      </div>
    </footer>
  )
}

export default Footer
