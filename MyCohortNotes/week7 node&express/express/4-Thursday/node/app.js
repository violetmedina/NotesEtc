

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

//need these 2 lines of code to parse form data
// places the data on the request as request.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//if views has the default name 'views' you don't need to set it, only if the name is different

// app.use(require('./routes/index'))

app.get('/', (req, res) => {
    
    res.render('index')
})

app.post('/', (req, res) => {
    
    let {firstName, lastName} = req.body // destructuring 

    res.send('post was received')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})