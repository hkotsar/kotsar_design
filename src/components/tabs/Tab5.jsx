import React from 'react';
import './tabs.scss';
import ProjectList from '../project-card/ProjectList';

const Tab5 = () => {
  return (
    <div className="projects__content" id="other">
        <h2 class="projects__content--heading tab--5">Muud projektid</h2>
        <ProjectList category={"other"} />
    </div>
  )
}

export default Tab5
