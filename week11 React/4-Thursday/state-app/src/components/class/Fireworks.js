import React, { Component } from 'react'


//props is a way to pass data from one component to another component
//props.name inside class is this.props.name
//state is a way to keep track of internal data like a counter
export default class Counter extends Component {

    constructor(props){
        //call base class constructor
        super(props)

        //this.state is how you create state and any key value pairs that you create here are part of state
        //this.state is an instance variable
        this.state = {
            bang: this.props.val
        }
    }

    handleBangClick = () => {
        //increment the count in state
        // this.state.count = 99 is a bit NO NO
        console.log(this.state)
        if (this.state.bang = this.props.val) {
            this.setState((state, props)=>{
                console.log('orange')
                return {
                    bang: state.bang = '💥'
                }
            })
        }
        else if(this.state.bang = '💥'){
            this.setState((state, props)=>{
                console.log('red')
                return {
                    bang: state.bang = this.props.val
                }
            })
        }
    }



    //? this is just a function
    render() {
        //can have code before the return

        let {val} = this.props
        let {bang} = this.state

        return (
        <>
            <h1>{bang}</h1>

            <button onClick={this.handleBangClick}>RED BUTTON</button>

        </>
        )
    }
}
