import mysql from 'mysql'

function createBDConnection() {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123',
		database: 'payfast'
	})
}

module.exports = function() {
	return createBDConnection
}
