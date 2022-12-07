import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import AddProject from './AddProject'
import Projects from './Projects'

const ProjectManagement = () => {

  const [projects, setProjects] = useState([]) //[{}, {}, {}]

  //uuid
  //componentDidMount



  useEffect(() => {

    //setting initial data for projects
    setProjects([
      {
        id: uuidv4(),
        category: 'Front-End',
        title: 'Javascript'
      },
      {
        id: uuidv4(),
        category: 'BackEnd',
        title: 'Node'
      },
      {
        id: uuidv4(),
        category: 'Front-End',
        title: 'React'
      }


    ])
  }, [])

  const handleAddProject = (newProject) => {  //newProject = {}

    setProjects([newProject, ...projects])
  }

  const handleRemoveProject = (id) => {

    let filteredProjects = projects.filter(project =>{

      return id != project.id;
    })


    setProjects(filteredProjects)

   }

  // console.log(projects);

  return (
    <>
      <h1>project management</h1>

      <Projects projects={projects} deleteProject={id =>handleRemoveProject(id)}/>

      <AddProject addProject={project=>handleAddProject(project)} />
    </>
  )
}

export default ProjectManagement
