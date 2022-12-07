
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')) //all static assets go here, like images
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//         res.send('Hello World!');
//     });

app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))
app.use(require('./routes/faq'))
app.use(require('./routes/data'))
app.use(require('./routes/virus'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//aboutus
//faq
//data


//MVC: model - viewer - controller

//model : data
//controller: route handler
//views: html/css/fe js
//n-tier: business layer, data, view layer