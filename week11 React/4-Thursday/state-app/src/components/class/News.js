
import React, { Component } from 'react'

export default class News extends Component {

    constructor(){
        super()

        this.state = {
            count: 0,
            articles: []
        }

        // console.log('inside constructor');
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1

        })
    }

    // componentWillMount() {
    //     console.log('component will mount');
    // }

    async componentDidMount() {

        let results = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd')
        let data = await  results.json();

        this.setState({
            articles: data.articles
        }, ()=>{
            console.log("this is inside of our state", this.state.articles);
        })

        // console.log("articles", this.state.articles);

    }

    // componentDidUpdate(){
    //     console.log('update happened');
    // }

  render() {

    console.log('mounted to screen');
    let {articles} = this.state
    return (
      <>
        I am a component <br />
        {this.state.count} <br />
        <button onClick={this.handleClick}>Increment</button>


        <ul>
            {articles.map((article, index) =>{
                return <li key={index}>{article.title}</li>
            })}
        </ul>
      </>
    )
  }

}