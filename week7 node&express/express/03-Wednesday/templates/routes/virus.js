

const express = require('express');
const axios = require('axios'); // this is like fetch

const router = express.Router() 

router.get('/virus', (req, res) => {
    
    axios.get('https://api.covidtracking.com/v1/states/current.json')
    .then(data =>{

        // data is an array of objects [{}, {}, {}]
        // state name, positive, total
        res.render('virus', {
            data: data.data
        })
        // console.log(data.data);

    })
    .catch(error =>{
        res.send('error on page')
    })
})

module.exports = router;
