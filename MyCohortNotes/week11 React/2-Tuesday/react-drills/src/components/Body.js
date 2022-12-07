import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Images from './Images'

export class Body extends Component {
  render() {
    return (
      <div>
      <h2></h2>
        <SearchBar />
        <Images />
      </div>
    )
  }
}

export default Body