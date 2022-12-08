import { useState } from 'react';
import './App.css';

function App() {

    const [input, setInput] = useState("")
    const [obj, setObj] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        convertAnalyze(input)
    }

    const convertAnalyze = () => {
        const sentence = "abcdefghijklmnopqrstuvwxyz"
        let obj = {}

        for (let i = 0; i < sentence.length; i++) {
            obj[i] = 0
        }

        for (let i = 0; i < input.length; i++) {
            if (input[i] in obj) {
                obj[i] += 1
            } else {
                console.log("Other Alphanumeric Characters Detected")
            }
        }
        setObj(obj)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter Sentences Here' onChange={(e) => setInput(e.target.value)}></input>
                <button type='submit'>Submit Sentence</button>
            </form>
            <h3>Results</h3>
            <ul style={{ listStyle: "none" }}>
                {Object.keys(obj).map((key, index) => {
                    return (
                        <li key={index}>{key}: {obj[key]}</li>
                    );
                })}
            </ul>
        </div>
    );
}



export default App;
