
// 1. import express

const express = require('express');

// 2. invoke express router

const router = express.Router() //creates a sub route

router.get('/data', (req, res) => {
    res.send('Data Page')
})

// 3. export the handler for the sub route

module.exports = router;