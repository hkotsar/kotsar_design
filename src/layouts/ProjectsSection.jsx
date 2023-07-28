import React from 'react';
import Carousel from '../components/carousel/Carousel';
import './projectsection.scss';
import ArrowLink from '../components/buttons/ArrowLink';

function ProjectsSection() {
  return (
    <div className="carousel-projects">
      <Carousel />
      <div className="center">
        <ArrowLink url={"/projektid/ux-ui-disain#ux-ui"} text={"Kõik projektid"} linkWidth={24} />
      </div>
    </div>
  )
}

export default ProjectsSection
