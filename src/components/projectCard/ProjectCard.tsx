import type React from 'react'

import style from './ProjectCard.module.scss'

const ProjectCard: React.FC = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImageContainer}>
        {/* <img src={'null'} className={style.cardImage} alt="hello" /> */}
        <div className={style.ProjectTitle}>projectTitle</div>
      </div>
      <div className={style.cardTextContainer}>
        <p className={style.cardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
