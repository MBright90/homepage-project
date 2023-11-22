import type React from 'react'
import Header from '@components/header/Header'
import ProjectsGrid from '@components/projectsGrid/ProjectsGrid'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProjectsGrid />
    </>
  )
}

export default App
