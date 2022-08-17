const express = require('express')
const app = express()
const mysql = require('mysql')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

require('dotenv').config()

// Create transporter object
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: { 
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
})

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

//connection.connect()

function getLawnImages(res) {
  connection.query('SELECT * FROM lawnImages', function (err, results) {
    res.send(results)
  })
}

function sendEmail(res, name, email, message) {
 
  let fullMsg = {
    from: 'vicenta.smith67@ethereal.email',
    to: 'caleb@devforia.com',
    subject: 'Message',
    text: `
      Name: ` + name + `
      Email: ` + email + `
      Message: ` + message + ` 
    `
  }
  
  transporter.sendMail(fullMsg, err => {
    if (err) {
      return res.send({ messageSuccess: false });
    } 
    return res.send({ messageSuccess: true })
  })
}

app.get('/api/getLawnImages', (req, res) => {
  getLawnImages(res)
})

app.post('/api/sendEmail', (req, res) => {
  let name = req.body.name
  let email = req.body.email 
  let message = req.body.message 

  sendEmail(res, name, email, message)
})

app.listen(3001, () => {console.log('Listening on port 3001')})