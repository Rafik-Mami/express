const express = require('express')
const app = express()
const port = 5000

var d = new Date();
var n = d.getDay()
var h = d.getHours();

app.get('/', (req, res,next) => {
    if (n != 0 && n != 6 && h>8 && h<17 )  {
        next()
    }
    else {
        res.send('page not found')
    }
})
app.set('view engine', 'pug');
app.set('views', './views');


//app.use(express.static(__dirname+'/public'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/services', (req, res) => {
    res.render('services')
})

//listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})