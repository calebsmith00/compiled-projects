const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const sql = require('./sql')
const Request = require('tedious').Request

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/api', (req, res) => {
	request = new Request("select * from users;", (err, row) => {
		if (err) return console.error(err)
		console.log(row + ' rows')
	})

	request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log(column.metadata.colName + ': ' + column.value);
        });
    });

	sql.connection.execSql(request)
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
	
})