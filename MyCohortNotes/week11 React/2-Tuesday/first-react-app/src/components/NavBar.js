

import React, { Component } from 'react'

 const NavBar = (props) => {


    return (
        <>
            <a href={props.url}>{props.name}</a>
        </>
    )


 }


export default NavBar