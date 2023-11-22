import type React from 'react'

import style from './ProjectCard.module.scss'

const ProjectCard: React.FC = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImageContainer}>
        {/* <img src={'null'} className={style.cardImage} alt="hello" /> */}
        <div className={style.ProjectTitle}>projectTitle</div>
      </div>
    </div>
  )
}

export default ProjectCard
