const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
// const passport = require('passport');

router.get('/login', (req,res) => {


    res.render('login')
})


router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

router.post('/login', (req, res)=>{

    //scrape info from header

        let username = req.params.username
        let password = req.params.password

    // check if user is in db

    

    // encrypt login password

    // compare encrypted passwords

    // place on the session so login can persist
})


module.exports = router;