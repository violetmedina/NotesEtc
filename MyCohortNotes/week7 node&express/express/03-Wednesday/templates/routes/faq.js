

// 1. import express

const express = require('express');

// 2. invoke express router

const router = express.Router() //creates a sub route

router.get('/faq', (req, res) => {
    res.send('FAQ Page')
})

// 3. export the handler for the sub route

module.exports = router;