

import React, { Component } from 'react'

class Student extends React.Component{

    constructor(){
        super()
    }

    render(){

        return (
        <div>
            <h1>Hello {this.props.studentName}</h1>
            <h1>year {this.props.year}</h1>
        </div>
        )
    }
    }

export default Student