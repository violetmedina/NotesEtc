
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))
app.use(require('./routes/faq'))
app.use(require('./routes/data'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})