import React from 'react';
import './project-card.scss';
import { Link } from 'react-router-dom';

function ProjectCard({ id, title, image, icon, subtext }) {
  return (
    <div className="card">
        <img className="card__img" src={`../../images/${image}`} alt="img" />
        <svg class="card__icon">
            <use xlinkHref={`../../icons.svg#${icon}`}></use>
        </svg>
        <div class="card__content">
            <h1 class="card__content--title">{title}</h1>
            <p class="card__content--text">
                {subtext}
            </p>
        </div>
        <div class="card__link">
            <Link className="card__link--btn" to={`/projektid/${id}`}>Vaata lähemalt</Link>
        </div>
    </div>
  )
}

export default ProjectCard
