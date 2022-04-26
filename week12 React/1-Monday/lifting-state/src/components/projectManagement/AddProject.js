import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid';

const AddProject = ({addProject}) => {


  const [category, setCategory] = useState('Front-End')
  const [title, setTitle] = useState("")


  const handleSubmit = (e) => {

    e.preventDefault()

    let newProject = {
      id: uuidv4(),
      category,
      title
    }

    addProject(newProject)  //update state in parent
  }
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">

          <Form onSubmit={handleSubmit}>
          <Form.Select aria-label="Default select example" value={category}
          onChange={e=>setCategory(e.target.value)}>
              <option>Choose</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>

          </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" value={title}
              onChange={e=> setTitle(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </div>
          </div>
      </div>
    </>
  )
}

export default AddProject
