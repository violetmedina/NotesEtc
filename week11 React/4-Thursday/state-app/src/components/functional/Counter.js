import React, {useState} from 'react'

const Counter = () => {

    //count = 0
    //setCount is the setter function
    const [count, setCount] = useState(0)

    return (
    <>
        <h1>{count}</h1>

        <button onClick={()=>setCount(count +1)}>Increment+</button>
        <button onClick={()=>setCount(count -1)}>Decrement-</button>
        <button onClick={()=>setCount(count * 0)}>Reset</button>
    </>
    )
}

export default Counter