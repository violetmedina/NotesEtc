
import React, {Component} from 'react';

import Student from './components/Student'
import NavBar from './components/NavBar'

export default class App extends React.Component{

  constructor(){
    super()
  }

  render(){

    return (
      <div>
        <NavBar name="Home Page" url="http://www.google.com"/>
        <NavBar name="About Us" url="http://yahoo.com"/>
        <NavBar name="FAQ" url="http://gmail.com"/>
        <h1>Hello Atlanta</h1>
        <Student studentName="Dez" year={1999} />
        <Student studentName="Violet" year={2000} />
        <Student studentName="Dane" year={2001} />
        <Student studentName="Tri" year={2001} />
        <Student studentName="James" year={2001} />
      </div>
    )

  }
}