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
            count: this.props.val
        }
    }

    handleAddClick = () => {
        //increment the count in state
        // this.state.count = 99 is a bit NO NO

        this.setState((state, props)=>{
            return {   //this object is representative of the state
                count: state.count + 1
            }
        })
    }

    handleRemoveClick = () => {
        //increment the count in state
        // this.state.count = 99 is a bit NO NO

        this.setState((state, props)=>{
            return {   //this object is representative of the state
                count: state.count - 1
            }
        })
    }

    handleResetClick = () => {
        //increment the count in state
        // this.state.count = 99 is a bit NO NO

        this.setState((state, props)=>{
            return {   //this object is representative of the state
                count: this.props.val
            }
        })
    }


    //? this is just a function
    render() {
        //can have code before the return

        let {val} = this.props
        let {count} = this.state

        return (
        <>
            <h1>{count}</h1>

            <button onClick={this.handleAddClick}>Increment +</button>
            <button onClick={this.handleRemoveClick}>Decrement -</button>
            <button onClick={this.handleResetClick}>Reset</button>
        </>
        )
    }
}
