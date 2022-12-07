

const express = require('express');

const router = express.Router() 

router.get('/data', (req, res) => {
    res.send('Data Page')
})

module.exports = router;