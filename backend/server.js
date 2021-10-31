const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

//const jwt = require('jsonwebtoken')

const routesURL = require('./routes/routes')
dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/', routesURL)

//database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected successfully!')
}, error => {
    console.log('Something was wrong... db is not connected :C ' + error)
})

//database
/* mongoose.connect(process.env.DATABASE_ACCESS, () =>
console.log("Data base is connected ")) */

//listener
app.listen(4000, () => console.log("Server is up and running"))