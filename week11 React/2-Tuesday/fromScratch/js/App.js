
import React, { Component } from 'react'

export default class App extends React.Component{

    constructor(){
        super() //calling base class constructor
    }

    //render method returns JSX
    //this.props.cityName
    render(){

        return (<h1>Hello {this.props.cityName}</h1>)
    }
}
