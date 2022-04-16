
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');

// app.use adds to the middleware!
app.use(cookieSession({
    name: 'session',
    keys: [`asdjflaskdjfasljk`],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {

    // got pw for a form
    let password = "mypassword"

    //check database
    //good match
    //login
    //store info in cookie
    //place a name on the session
    req.session.fName = 'Violet'
    res.send('home page')
})


app.get('/protected', (req, res) => {

    // in order for them to see this page, they have to be logged in
    // get cookie info from the header
    let firstName = req.session.fName
    res.send(firstName)
})


app.listen(3000, () => {
    console.log(`listening on port 3000`);
})