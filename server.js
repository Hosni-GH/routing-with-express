const express = require('express')
const app = express()
app.use(Dates = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 8 && hour <= 17) {
        app.use(express.static(__dirname + "/public"))
    } else res.send("<h1>Our office is not open now</h1>")
    next()
})

app.listen(3001, (err) => {
    if (err) console.log('server is not running')
    else console.log('server is running on port 3000');
        
})