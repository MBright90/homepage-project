import type React from 'react'
import ProjectCard from '@components/projectCard/ProjectCard'

import style from './ProjectsGrid.module.scss'

const ProjectsGrid: React.FC = () => {
  return (
    <div className={style.gridContainer}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default ProjectsGrid
