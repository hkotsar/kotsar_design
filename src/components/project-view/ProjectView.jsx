import React from 'react';
import './project-view.scss';
import { Link } from 'react-router-dom';

function ProjectView({ title, image, content, links, techList }) {
    

  return (
    <div className="details">
        <div class="padding-top">
            <img class="details__img" src={`../../images/${image}`} alt={title} />
       </div>
       <div class="details__content">
            <h1>{title}</h1>
            <p className="paragraph">{content}</p>
            <div class="details__links">
                {links.map((link) => {
                    return (
                        <Link className="btn btn__details" target="_blank" rel="noopener noreferrer" to={link.link}>
                            <span>{link.name}</span>
                            <svg class="btn__details--icon">
                                <use xlinkHref={`../../icons.svg#icon-keyboard_arrow_right`}></use>
                            </svg> 
                        </Link>
                    )
                })}
            </div>
            <div className="details__tech">
                <h1>Kasutatud tehnoloogiad</h1>
                <div class="details__tech--list">
                    {techList.map((tech) => {
                        return (
                            <div class="details__tech--item">
                                <span>{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
       </div>
    </div>
  )
}

export default ProjectView
