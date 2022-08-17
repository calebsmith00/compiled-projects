require('dotenv').config()
const tedious = require('tedious')
const Connection = tedious.Connection
const config = {
    server: "localhost",
    options: {
        database: process.env.DB_NAME,
    },
    authentication: {
        type: "default",
        options: {
            userName: process.env.DB_USER,
            password: process.env.DB_PASS,
        }
    }
}

function handleConnection(err) {
    if (err) console.error("Error connection :-(", err)
    else console.log("connection success!")
}

let connection = new Connection(config)
connection.on('connect', handleConnection)

connection.connect()

module.exports = { connection }