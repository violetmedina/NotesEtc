import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
  return (
    <>

      <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/counter">Counter</Link> </li>
          <li> <Link to="/project-management">Project Management</Link> </li>
      </ul> <br /><br /><br />


      {props.children}

      <br /><br />

      Footer information <br />
    </>


  )
}

export default BaseLayout
