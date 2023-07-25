import React from 'react';
import Carousel from '../components/carousel/Carousel';
import './projectsection.scss';
import ArrowLink from '../components/buttons/ArrowLink';

function ProjectsSection() {
  return (
    <div className="projects">
      <Carousel />
      <div className="center">
        <ArrowLink url={"/projektid"} text={"Kõik projektid"} linkWidth={24} />
      </div>
    </div>
  )
}

export default ProjectsSection
