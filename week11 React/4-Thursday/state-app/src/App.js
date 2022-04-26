import React from 'react'
// import Counter from './components/class/Counter'
// import Fcounter from './components/functional/Counter'
import Fireworks from './components/class/Fireworks'
import News from './components/class/News'
import Fnews from './components/functional/News'

const App = () => {

  return (
    <>

    <Fireworks val= '🧨' />

    <News />

    <Fnews />


      {/* Functional Component
      <Fcounter />
      <br></br>
      <br></br>
      Class Component
      <Counter val={0}/>
      <Counter val={9}/> */}
    </>
  )
}

export default App
