
const express = require('express');

const app = express();
const port = 3000;

// home route
app.get('/', (req,res) => {

    res.send(`<h1>Good Morning</h1>`)
})

//localhost:3000/cats
//localhost:3000/cat

app.get('/cats?', (req, res) => {

    res.send('cats')
    
})

// batwoman
// batman
app.get('/bat(wo)?man', (req, res) => {
    res.send('bat-people')
})

//localhost:300/contact?name=Violet
app.get('/contact', (req, res) => {
    let name = req.query.name
    res.send(`<h1>${name}</h1>`)
})

app.get('/data/:city', (req, res) => {
    
    let city = req.params.city;
    
    console.log(req.params);
    res.send(`I live in ${city}`)
})

//localhost:3000/flights/Philly-St.Pete
app.get('/flights/:departing/:arriving', (req, res) => {
    
    let departing = req.params.departing
    let arriving = req.params.arriving

    res.send(`
    <b>Departing:</b> ${departing}
    <br/><br/>
    <b>Arriving</b> ${arriving}
    `)
})

app.get('/calc/add/:num1/:num2', (req, res) => {
    
    let num1 = req.params.num1
    let num2 = req.params.num2

    let sum = num1 + num2
    res.send(`
    ${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}
    `)
})

let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}

// let data = {data: [{

app.get('/dogs/:id', (req, res) => {
    
    let id = req.params.id;
    let name = data.data[id].name;
    let img = data.data[id].img;

    res.send(`
    <h1> ${name} </h1>
    <img src="${img}" width="400px">
    `)
})



app.listen(port, ()=> {
    console.log `listening on port ${port})`;
})
