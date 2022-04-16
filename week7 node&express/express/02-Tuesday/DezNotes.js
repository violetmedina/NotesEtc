
const express = require('express');

//you will only have express once
const app = express();

//create a server 


//inside of express, we have access to routes. Routes are able to handle the incoming URL and give us access to a callback function so that we can respond to our client.
// example:
// app.get('path' (route handler which will have the request and response) => {code})

// the '/' is the path for the home route

app.get('/', (req,res)=>{
    //express handles the headers for us
    //instead of .end, in express it is .send
    res.send('<h1>howdy yall</h1>')
})

//how to take advantage of plural/singular -- regular expressionsions -- if we want the user to go to the same page if they type in cat or cats, use ?. See below
app.get('/cats?', (req, res)=>{

    res.send('cats')

})

//what if you want two separate names to go to the same page? See below for an example of grouping:

app.get('/bat(wo)?man', (req,res)=>{
    res.send('bat peeps')
})

//put a star next to it and it doesnt matter how many times they type it, in the example below they could type batwowowowowowowowoman and it wouldnt matter
app.get('/bat(wo)*man', (req,res)=>{
    res.send('bat peeps')
})


//want to attach more information to this route? see example below. here is how the url would need to look: localhost:3210/contact?name=Dez&last=Bryan
app.get('/contact', (req, res)=>{
    // let last = req.query.last;
    // let name = req.query.name;

    //the above can be unpacked cleaner
    let{name,last} = req.query;
    
    console.log(req.query);

    res.send(`<h1>${name} ${last}</h1>`)
})



// after file /:variable
// so the url would look like localhost:3210/data/atlanta

app.get('/data/:city', (req, res)=>{
    let city = req.params.city;
    res.send(`i live in ${city}`)
})

//our url would look like this: localhost:3210/flights/Philly-St.Pete
app.get('/flights/:startCity-:endCity', (req,res)=>{
    let startCity = req.params.startCity;
    let endCity = req.params.endCity;
    res.send(`
        <b>Departing</b>${startCity}
        <br></br>
        <b>Arriving</b>${endCity}
    `)
})

//calculator

app.get(`/add/:num1/:num2`, (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    res.send(`${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`)

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


//url should look like: localhost:3210/dogs/2

//dogs table of contents
app.get('/dogs', (req, res) => {
    res.send(`
    <h1>dogs</h1>
    <ul>
        <li> <a href="/dogs/0"> golden retriever </a> </li>
        <li> <a href="/dogs/1"> lab </a> </li>
        <li> <a href="/dogs/2"> pug </a> </li>
        <li> <a href="/dogs/3"> poodle </a> </li>
    </ul>
    `)
})

//get to specific dogs
app.get('/dogs/:id', (req, res) => {
    let id = req.params.id; 
    let name = data.data[id].name;
    let img = data.data[id].img;

    res.send(`

    <ul>
        <li> <a href="/dogs/0"> golden retriever </a> </li>
        <li> <a href="/dogs/1"> lab </a> </li>
        <li> <a href="/dogs/2"> pug </a> </li>
        <li> <a href="/dogs/3"> poodle </a> </li>
    </ul>

        <h1>${name}</h1>

        <img src="${img}" width="200px">



    `)
})



app.listen(3210, () => {
    console.log('listening on port 3210');
})