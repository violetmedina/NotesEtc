
const express = require('express');
const bcrypt = require('bcrypt'); //hash and salt our passwords
const router = express.Router();
const db = require('../models');

router.get('/registration', (req,res) => {

    res.render('registration')
})

router.post('/registration', async (req, res) => {
    
    try {
        //scrape information from the header
        let {username, email, password} = req.body;

        //password encrypt

        password = bcrypt.hashSync(password, 8)

        //save info to database
        //assume that all users are basic level

        let insertRecord = await db.users.create({
            username: username,
            email: email,
            password: password,
            roleID: 2
        })

    } catch (error) {
        console.log(error);
        res.render('registration');

        // res.render('registration', {
        //     error: "error: can't register this username"
        // })
        
    }
})


module.exports = router;
