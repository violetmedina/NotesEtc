import React, { useState } from 'react'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {

    setCount(count + 1)
  }

  const handleDecrement = () => {

    setCount(count - 1)
  }

  return (
    <>

      <DisplayCount count={count}/>
      <IncrementCount increment={handleIncrement} decrement={handleDecrement}/>

    </>
  )
}

export default Counter