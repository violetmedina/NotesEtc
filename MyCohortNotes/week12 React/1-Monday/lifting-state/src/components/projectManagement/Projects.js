import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = ({projects, deleteProject}) => {

  console.log("projects component", projects);
  return (
    <>

    <div className="container">

      <div className="row">
        <div className="col-8 offset-2">

          <ul>
            {projects.map(projectObj =>{

              return <ProjectItem key={projectObj.id} project={projectObj} onDelete={deleteProject} />
            })}
          </ul>
        </div>
      </div>
    </div>

    </>
  )
}

export default Projects
