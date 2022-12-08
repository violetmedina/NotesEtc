// app.patch("/tasks/:id/is_completed", (req, res) => {
//     const taskId = req.params.id;
//     const taskIsCompleted = req.body.is_completed;
//     db.none("UPDATE tasks SET is_completed = $1 WHERE id = $2", [
//         taskIsCompleted,
//         taskId,
//     ]).then(() => {
//         const result = taskIsCompleted ? "completed" : "not completed";
//         res.send(`Task ${taskId} is ${result} (${taskIsCompleted})`);
//     });
// });



// {
//     data: [
//         {
//             id: 1,
//             title: 'This time there.',
//             author: 'Brisa Hoppe',
//             genre: 'Dolores',
//             description: "Alice said; 'there's a large piece out of that dark hall, and wander about among those beds of bright flowers and the Panther were sharing a pie--' [later editions continued as follows When the pie.",
//             isbn: '9792334688122',
//             image: 'http://placeimg.com/480/640/any',
//             published: '1980-04-23',
//             publisher: 'Aut Nihil'
//         },
//         {
//             id: 2,
//             title: 'MUST be more to be.',
//             author: 'Jerald Wiegand',
//             genre: 'Laudantium',
//             description: "Knave. The Knave did so, and were resting in the trial done,' she thought, 'and hand round the refreshments!' But there seemed to her very much at this, she noticed that they were playing the Queen.",
//             isbn: '9785821134721',
//             image: 'http://placeimg.com/480/640/any',
//             published: '1999-05-02',
//             publisher: 'Fuga Ducimus'
//         },
//         {
//             id: 3,
//             title: 'The Mock Turtle.',
//             author: 'Hans Yost',
//             genre: 'Id',
//             description: "I shall have to go and live in that ridiculous fashion.' And he added looking angrily at the sides of it; then Alice, thinking it was empty: she did not sneeze, were the two creatures, who had been.",
//             isbn: '9795207326978',
//             image: 'http://placeimg.com/480/640/any',
//             published: '2011-12-11',
//             publisher: 'Et Pariatur'
//         },
//         {
//             id: 4,
//             title: 'Duchess was.',
//             author: 'Felix Renner',
//             genre: 'Iusto',
//             description: "I'm mad?' said Alice. 'Did you say pig, or fig?' said the Hatter. 'You might just as well. The twelve jurors were all turning into little cakes as they were nice grand words to say.) Presently she.",
//             isbn: '9794025555485',
//             image: 'http://placeimg.com/480/640/any',
//             published: '1996-10-05',
//             publisher: 'Sit Non'
//         },
//         {
//             id: 5,
//             title: "Don't let him know.",
//             author: 'Katarina Powlowski',
//             genre: 'Qui',
//             description: "INSIDE, you might catch a bat, and that's very like a serpent. She had quite a large dish of tarts upon it: they looked so grave that she did not venture to ask any more HERE.' 'But then,' thought.",
//             isbn: '9782324322563',
//             image: 'http://placeimg.com/480/640/any',
//             published: '1988-04-10',
//             publisher: 'Aut Dicta'
//         },
//         {
//             id: 6,
//             title: 'All on a bough of.',
//             author: 'Jaylen Torphy',
//             genre: 'Velit',
//             description: 'M, such as mouse-traps, and the other bit. Her chin was pressed hard against it, that attempt proved a failure. Alice heard the Rabbit in a moment: she looked up, and there stood the Queen was to.',
//             isbn: '9787975363040',
//             image: 'http://placeimg.com/480/640/any',
//             published: '2019-11-18',
//             publisher: 'Ducimus Dolores'
//         },
//         {
//             id: 7,
//             title: 'Alice thought to.',
//             author: 'Devin Jakubowski',
//             genre: 'Doloremque',
//             description: "Alice said to herself, 'whenever I eat or drink anything; so I'll just see what this bottle does. I do so like that curious song about the twentieth time that day. 'A likely story indeed!' said the.",
//             isbn: '9797717891335',
//             image: 'http://placeimg.com/480/640/any',
//             published: '2016-07-21',
//             publisher: 'Qui Praesentium'
//         },
//         {
//             id: 8,
//             title: 'Still she went on.',
//             author: 'Tyshawn Collins',
//             genre: 'Eum',
//             description: "Alice. 'But you're so easily offended, you know!' The Mouse gave a little scream, half of fright and half believed herself in Wonderland, though she felt very lonely and low-spirited. In a minute or.",
//             isbn: '9798182990561',
//             image: 'http://placeimg.com/480/640/any',
//             published: '1999-10-23',
//             publisher: 'Voluptatibus Quia'
//         },
//         {
//             id: 9,
//             title: 'Queen shrieked.',
//             author: 'Juliet Zulauf',
//             genre: 'Alias',
//             description: "The Dormouse shook itself, and was going to leave it behind?' She said the King; and the others looked round also, and all would change (she knew) to the table for it, she found a little hot tea.",
//             isbn: '9785152885200',
//             image: 'http://placeimg.com/480/640/any',
//             published: '1978-01-12',
//             publisher: 'Numquam In'
//         },
//         {
//             id: 10,
//             title: 'Knave. The Knave.',
//             author: 'Kaya Nienow',
//             genre: 'Molestias',
//             description: "Forty-two. ALL PERSONS MORE THAN A MILE HIGH TO LEAVE THE COURT.' Everybody looked at the Caterpillar's making such VERY short remarks, and she hastily dried her eyes anxiously fixed on it, and kept.",
//             isbn: '9795555409132',
//             image: 'http://placeimg.com/480/640/any',
//             published: '2009-05-21',
//             publisher: 'Enim Ullam'
//         }
//     ]
// }

    // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    // const alphabet = alpha.map((x) => String.fromCharCode(x));
    // let count = new Array(26).fill(0)
    // let arr = new Array.from(input)

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//     const [userInput, setUserInput] = useState("");

//     // this function will analyze the text entered by the user and display the number of occurrences of each letter of the alphabet.
//     const analyzeText = (text) => {
//         let counts = new Array(26).fill(0); // to store count of each letter
//         for (let i = 0; i < text.length; i++) {
//             let index = text[i].charCodeAt(0) - 97; // get index in array using char code at 0th position in string
//             if (index >= 0 && index < 26)
//                 // only if character is an alphabet
//                 counts[index] += 1; // incrementing the count corresponding to that character
//         }
//         return counts;
//     };
//     return (
//         <div>
//             <h1>Text Analysis</h1>
//             <input type="text" placeholder="Enter your text here..." onChange={(e) => setUserInput(e.target.value)}
//             />
//             <button onClick={() => {
//                     const counts = analyzeText(userInput);
//                     // display results in a div
//                     let output = "Letter\tCount\n";
//                     for (let i = 0; i < counts.length; i++) {
//                         let letter = String.fromCharCode(97 + i);
//                         output += `${letter}\t${counts[i]}\n`;
//                     }
//                     document.getElementById("result").innerHTML = output;
//                 }}
//             >Analyze Text</button>{" "}
//             <div id="result"></div>{" "}
//         </div>
//     );
// };

// export default App;

const face = "aAbcde";
console.log(face.codePointAt(1));