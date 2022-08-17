require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

app.use(cookieParser())
app.use(express.json())

app.get('/api/setCookie', (req, res) => {
    res.cookie('name', 'Caleb')

    let token = jwt.sign({name: req.cookies.name}, process.env.ACCESS_SECRET)
    res.cookie('token', token)

    res.send('Cookie sent.')
})

app.post('/api/setCookie', (req, res) => {
    let token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
    jwt.verify(token, process.env.ACCESS_SECRET, (err, decoded) => {
        if (err) return res.json({ error: err, errorMessage: 'Invalid JSON Web Token'})
        res.json(decoded)
    })
})

app.get('/', (req, res) => {

    if (req.cookies.name) return res.json({ error: null, cookie: req.cookies.name, token: req.cookies.token })
    res.json({ error: null })
})

app.listen(3000)