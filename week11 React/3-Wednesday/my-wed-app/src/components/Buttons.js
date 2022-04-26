
import React from 'react'

const Buttons = ({css, text}) => {

    let styles = {
        color: 'pink',
        backgroundColor: 'purple',
        fontSize: '20px',
        padding: '20px'
    }
  return (
    <>

    <button className={css}>{text}</button>

    {/* <div style={{backgroundColor:'green', color:'pink', padding:'30px', fontSize:'20px'}}>Inline Styling</div>

    <p style={styles}>Style defined as an object</p> */}

    </>
  )
}

export default Buttons