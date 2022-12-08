import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("")
  const [obj, setObj] = useState({})
  const [message, setMessage] = useState("")

  const convertAnalyze = () => {
    const sentence = "abcdefghijklmnopqrstuvwxyz"
    let obj = {}

    for (let i = 0; i < sentence.length; i++) {
      obj[sentence[i]] = 0
    }


    for (let i = 0; i < input.length; i++) {
      if (input[i] in obj) {
        obj[input[i]] += 1
      } else {
        setMessage("Other Non-Alpha Characters Detected!")
      }
    }
    setObj(obj)
  }

  return (
    <>
      <h1>Letter Counter</h1>
      <textarea placeholder='Enter Sentences Here' onChange={(e) => setInput(e.target.value)}></textarea>
      <button onClick={() => {convertAnalyze()}}>Submit</button>
      <h3>Results</h3>
      <ul style={{ listStyle: "none" }}>
        {Object.keys(obj).map((key, index) => {
          return (
            <li key={index}>{key}: {obj[key]}</li>
          );
        })}
      </ul>
      {message}
    </>
  );
}



export default App;
