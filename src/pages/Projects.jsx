import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './projects.scss';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projektid - Heiki Kotsar</title>
      </Helmet>
      <section className="section-projects">
          <div className="projects" >
            <div className="projects__tabs">
              <Link className="projects__tab projects__tab--1" to="/projektid/ux-ui-disain">UX/UI disain</Link>
              <Link className="projects__tab projects__tab--2" to="/projektid/veebiarendus">Veebiarendus</Link>
              <Link className="projects__tab projects__tab--3"  to="/projektid/sisuhaldus">Sisuhaldussüsteemid</Link>
              <Link className="projects__tab projects__tab--4"  to="/projektid/graafiline-disain">Graafiline disain</Link>
              <Link className="projects__tab projects__tab--5"  to="/projektid/muud-projektid">Muud projektid</Link>
            </div>
            <Outlet />
          </div>
      </section>
    </>
  )
}

export default ProjectsPage
