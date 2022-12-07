import React from 'react'

const Member = ({info}) => {
    
    return (
    <>
        <li>{info.name.first} {info.name.last}<br></br> {info.title}</li>
    </>
    )
}

export default Member