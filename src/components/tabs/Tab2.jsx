import React from 'react';
import './tabs.scss';
import ProjectList from '../project-card/ProjectList';


function Tab2() {
  return (
    <div className="projects__content" id="dev">
        <h2 class="projects__content--heading tab--2">Veebiarendus</h2>
        <ProjectList category={"dev"} />
    </div>
  )
}

export default Tab2
