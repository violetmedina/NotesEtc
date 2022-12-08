import { useState } from 'react';
import './App.css';

function App() {

    const [input, setInput] = useState("")

    function convertAnalyze(input) {
        // let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let counts = new Array(26).fill(0)
        let arr = new Array.from(input)

        for (let i = 0; i < input.length; i++) {
            let index = input[i].indexOf()
            if (index >= 0 && index < 26) {
                counts[index] += 1
            }
        }
        console.log(counts)
        return (counts)
    }

    return (
        <>
            <h1>Letter Counter</h1>
            <textarea placeholder='Enter Sentences Here' onChange={(e) =>
                setInput((e.target.value).toLocaleLowerCase())}></textarea>
            <button onClick={() => {
                const counts = convertAnalyze(input)
                for (let i = 0; i < counts.length; i++) {
                    let letter = String.fromCharCode(97 + i);
                    let output = {};
                    output = {letter: counts[i]};
                    console.log(output)
                }
            }}>Submit Sentence</button>
            <h3>Results</h3>
            <ul style={{ listStyle: "none" }}>

            </ul>
        </>
    );
}



export default App;
