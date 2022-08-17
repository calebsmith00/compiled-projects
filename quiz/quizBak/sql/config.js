const sql = require('mssql')
const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    server: 'localhost'
}

export async function runQuery(query) {
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query(query)
    } catch (err) {
        console.error(err)
    }
}