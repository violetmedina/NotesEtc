

const express = require('express');

const router = express.Router() 

router.get('/faq', (req, res) => {
    res.send('FAQ Page')
})

module.exports = router;