
// 1. import express

const express = require('express');

// 2. invoke express router

const router = express.Router() //creates a sub route

router.get('/aboutus', (req, res) => {
    res.send('About Us')
})

// 3. export the handler for the sub route

module.exports = router;