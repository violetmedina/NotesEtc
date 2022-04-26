import React, {useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";

const AboutUs = () => {

  const {aboutID} = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  useEffect(() => {
    document.title = "About Us"
  }, [])


  return (

    <>
    AboutUs
    <br></br><br></br><br></br>
    <h2>{aboutID}</h2>

    <button onClick={handleClick}>Go Home</button>
    </>
  )
}

export default AboutUs