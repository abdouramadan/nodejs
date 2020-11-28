const express    =  require('express')
const app        = express()
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const dotenv     = require('dotenv').config()
const port       = process.env.PORT
const path       = require('path')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('', express.static(path.join(__dirname, 'public')))
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')))

app.set('view engine', 'pug')


app.listen(port, () => console.log(`Server is on port ${port}`))