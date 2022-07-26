const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../models');

router.use(express.urlencoded({extended: false})) // body parser (if needed)
router.use(express.json())

router.get('/', (req, res) => {
  res.send('home page')
})

/* sign-in routes */
router.get('/login', (req,res) => {

  res.render('login')
})

router.post('/login', async (req, res)=>{

  try {

  let {username, password} = req.body

  let user = await db.users.findAll({where: {username: username}})

  let result = bcrypt.compareSync(password, user.password);


  if(result) {
      console.log('Passwords Match!');
      res.redirect('/')

  } else {
      // password is incorrect
      res.render('login', {message: 'Incorrect username or password'});
      console.log('Incorrect username or password');
  }
}
catch (error) {
  console.log(error);
  res.render('login', {message: 'An error has occurred'});
}
})

/* sign-out GET route */
router.get('/logout', (req, res)=>{

  res.render('logout')
})

router.post('/logout', (req, res)=>{

  res.render('logout')
})

/* user registration POST route */
router.post('/', (req, res)=>{

  res.render('')
})

/* Admin GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* Admin POST register */
router.post('/', (req, res)=>{

  res.render('')
})

/* staff GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* mentee GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* mentor GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* update POST route */
router.post('/updateUser', (req, res)=>{

  res.render('')
})

/* delete POST route */
router.post('/', (req, res)=>{

  res.render('')
})

/* Admin delete POST route */
router.post('/', (req, res)=>{

  res.render('')
})


module.exports = router;


// /* template route */
/*  */
// router.get('/', (req, res)=>{

//   res.render('')
// })


// router.get('/', function(req, res, next) {
  //   res.send('respond with a resource');
  // });

