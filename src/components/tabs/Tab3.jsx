import React from 'react';
import './tabs.scss';
import ProjectList from '../project-card/ProjectList';

function Tab3() {
  return (
    <div className="projects__content" id="cms">
        <h2 class="projects__content--heading tab--3">Sisuhaldussüsteemid</h2>
        <ProjectList category={"cms"} />
    </div>
  )
}

export default Tab3
