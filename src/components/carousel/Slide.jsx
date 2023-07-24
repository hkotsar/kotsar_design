import React from 'react';
import './carousel.scss';
import { Link } from 'react-router-dom';

function Slide({ slide }) {
    const { name, projects } = slide
    console.log(projects)

  return (
    <div className={`slide ${name}`}>
        
        {projects.map((project) => (
            <div className="slide__item" key={project.id}>
                <img className="slide__item--img" src={`../../images/${project.image}`} alt={project.title} />
                <div className="slide__item--content">
                    <h2>{project.title}</h2>
                    <div className="slide__item--flex">
                        
                        <p>{project.subtext}</p>
                        <Link className="slide__item--link" to={`/projektid/${project.id}`}>Vaata lähemalt</Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Slide
