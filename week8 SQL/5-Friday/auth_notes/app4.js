const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
let port = 3000;

let users = [
    {username: 'Matt', password: '1234'}, 
    {username: 'Jake', password: '4567'}, 
    {username: 'Brandon', password: '8901'}, 
    {username: 'Jose', password: '1122'} 
]

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({
    name: 'session',
    keys: [`asdjflaskdjfasljk`],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

const authLogin = (req, res, next) => {
    //check to see if username is on the login on the session

    if(req.session.username){
        next()
    }
    else {
        res.redirect('/login')
    }
}

app.all('/admin/*', authLogin, (req, res, next)=>{
    next()
})

app.get('/admin/dashboard', (req, res) =>{
    
    res.send('admin page')

})

app.get('/', (req, res) => {
    
    res.send('HOME')
})

app.get('/login', (req, res) => {
    
    res.render('login')
})

app.post('/login', (req, res) => {
    
    // grab information from header - un & pw
    // compare information to what is in storage/db

    let {userID, password} = req.body;  //these need to be exact to names field in form/ejs file because of destructuring

    let user = users.find(userRecord =>{
        //when true will return userRecord as one object in user variable

        return userRecord.username === userID && userRecord.password === password;
    })

    if(user){
        // set session information
        req.session.username = userID
        res.redirect('/')
    }
    else {
        res.redirect('/login')
    }


})




app.listen(port, () => {
    console.log(`listening on port ${port}`);
})