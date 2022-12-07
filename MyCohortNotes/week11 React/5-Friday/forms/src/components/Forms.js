import React, {useState} from 'react'

const Forms = () => {

  const [textValue, setTextValue] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [selectValue, setSelectValue] = useState("Seattle")


  const handleSubmit = (e) =>{
    e.preventDefault();

    //send data base
    console.log(textValue)

  }



  return (
    <>
      <h2>{textValue}</h2>
      <h2>{isValid ? 'true': 'false'}</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>

        <input type="checkbox" value={isValid} onChange={(e)=>setIsValid(e.target.value)}/>

        <select value={selectValue} onChange={e=>setSelectValue(e.target.value)}>
              <option value="Houston">Houston</option>
              <option value="Atlanta">Atlanta</option>
              <option value="Seattle">Seattle</option>
              <option value="Chicago">Chicago</option>
              <option value="NewYork">New York</option>
              <option value="SanFrancisco">San Francisco</option>
        </select>

        <input type="submit" />
      </form>
    </>
  )
}

export default Forms