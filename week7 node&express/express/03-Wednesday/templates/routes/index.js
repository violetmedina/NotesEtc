
// 1. import express

const express = require('express');

// 2. invoke the express router 

const router = express.Router() // creates a sub route 

let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]


cities.forEach((city, index) =>{
    console.log(index);
})

let x = 2;
let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]

//localhost:3000/virus

router.get('/', (req, res)=>{

    res.render('index', {
        firstName: "Violet", 
        lastName: "Medina",
        city: "", 
        num: 12, 
        pictures: "",
        cities: cities,
        user: ""
    })
})

//localhost:3000/citydata/0
//localhost:3000/citydata/1
//localhost:3000/citydata/2
//localhost:3000/citydata/3
router.get('/citydata/:id', (req, res)=>{

    let id = req.params.id;
    res.render('index', {
        firstName: "Violet", 
        lastName: "Medina",
        city: cities[id], 
        num: 12, 
        pictures: pictures[id],
        cities: cities,
        user: ""
})

    // res.send(`

    //     <link rel="stylesheet" href="/css/styles.css">

    //     <h1>Hello World </h1>
    // `)
})

//3. export the handler (sub route)

module.exports = router;