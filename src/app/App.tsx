import type React from 'react'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import ProjectsGrid from '@components/projectsGrid/ProjectsGrid'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProjectsGrid />
      <Footer />
    </>
  )
}

export default App
