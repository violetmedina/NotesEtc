import React from 'react'
import Card from 'react-bootstrap/Card';


const Contact = ({info}) => {
  return (
    <>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={info.imgURL} />
        <Card.Body>
            <Card.Title>{info.name}</Card.Title>

            <Card.Text>
                <ul>
                    <li><b>phone number:</b> {info.phone}</li>
                    <li><b>email:</b> {info.email}</li>
                </ul>
            </Card.Text>

        </Card.Body>
        </Card>
    </>
  )
}

export default Contact