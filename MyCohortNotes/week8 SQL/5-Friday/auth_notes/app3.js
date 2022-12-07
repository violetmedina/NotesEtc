const express = require('express');
const morgan = require('morgan');
const app = express();
let port = 3000;

/**  MIDDLEWARE
 * req => middleware(express) => response
 * middleware hijacks the request
 * middleware is a stack of functions to run one after the other
*/

// app.use(morgan()) // application wide middleware
//middleware is just a function

app.use(function(req, res, next){
    console.log(`I'm in the first function`);
    next()
})

app.use(function(req, res, next){
    console.log(`I'm in the second function`);
    next()
})

app.use(function(req, res, next){
    console.log(`I'm in the third function`);
    next()
})

const authLogin = (req, res, next) => {
    
    let passwordIsValid = false;

    if(passwordIsValid){
        console.log('user is valid');
    }
    else{
        res.redirect('/login')
    }
    
}

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/protected', authLogin, (req, res) => {   //can put middleware in the route as well, will intercept the route instead of the request- used as a gatekeeper
    res.send('protected')
})

app.get('/admin', (req, res) => {
    res.send('admin page')
})

app.get('/login', (req, res) => {
    res.send('user not valid')
})


app.listen(port, () => {
    console.log(`listening on port ${port}` );
})