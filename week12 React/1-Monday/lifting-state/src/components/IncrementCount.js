import React from 'react'

const IncrementCount = ({increment}, {decrement}) => {
  return (
    <>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default IncrementCount