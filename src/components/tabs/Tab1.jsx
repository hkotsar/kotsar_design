import React from 'react';
import './tabs.scss';
import ProjectList from '../project-card/ProjectList';


function Tab1() {
  return (
    <div className="projects__content" id="ux-ui">
        <h2 class="projects__content--heading tab--1">UX/UI disain</h2>
        <ProjectList category={"ux_ui"} />
    </div>
  )
}

export default Tab1
