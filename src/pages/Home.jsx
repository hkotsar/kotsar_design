import React from 'react';
import Landpage from '../layouts/Landpage';
import AboutSection from '../layouts/AboutSection';
import ProjectsSection from '../layouts/ProjectsSection';
import ContactSection from '../layouts/ContactSection';


const HomePage = () => {
  return (
    <> 
      <Landpage />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
