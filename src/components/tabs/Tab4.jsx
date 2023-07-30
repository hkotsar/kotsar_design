import React from 'react';
import './tabs.scss';
import ProjectList from '../project-card/ProjectList';

function Tab4() {
  return (
    <div className="projects__content" id="graphic">
      <h2 class="projects__content--heading tab--4">Graafiline disain</h2>
      <ProjectList category={"graphics"} />
    </div>
  )
}

export default Tab4
