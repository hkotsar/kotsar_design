import React, { useContext } from 'react';
import './project-card.scss';
import ProjectsContext from '../../context/projects';
import ProjectCard from './ProjectCard';

function ProjectList({ category }) {
    const data = useContext(ProjectsContext)

    const filteredCategory = data.projects.filter(item => item.category === category);

    return (
        <div className="projects__list">
            {filteredCategory.map(item => (
                <ProjectCard key={item.id} id={item.id} title={item.title} subtext={item.subtext} image={item.image} icon={item.icon} />
            ))}
        </div>
    )
}

export default ProjectList
