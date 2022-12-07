const express = require('express');
const router = express.Router();

router.get('/roster', (req,res) => {

   
    res.render('roster')
})



module.exports = router;