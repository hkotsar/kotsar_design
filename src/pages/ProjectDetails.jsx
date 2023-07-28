import React, {useContext} from 'react';
import ProjectView from '../components/project-view/ProjectView';
import ProjectsContext from '../context/projects';
import NotFound from '../components/notFound/NotFound';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';




const ProjectDetails = () => {
  const { id } = useParams();
  const data = useContext(ProjectsContext)

  

  const project = data.projects.find(((p) => p.id === Number(id)))

  if (!project) {
    return <NotFound message={"Projekti ei leitud"} />
  }

  

  return (
    <>
      <Helmet>
        <title>{`${project.alt} - Heiki Kotsar`}</title>
      </Helmet>
      <ProjectView 
        title={project.title} 
        image={project.image}
        content={project.content}
        links={project.links}
        techList={project.tech} 
      />
    </>
  )
}

export default ProjectDetails
