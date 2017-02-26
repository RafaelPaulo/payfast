function PaymentDAO(connection) {
	this._connection = connection
}

PaymentDAO.prototype.save = function (payment, callback) {
	this._connection.query('INSERT INTO payments SET ?', payment, callback)
}

PaymentDAO.prototype.update = function (payment, callback) {
	this._connection.query(
		'UPDATE payments SET status = ? where id =  ?',
		[payment.status, payment.id], callback
	)
}

PaymentDAO.prototype.list = function (callback) {
	this._connection.query('select * from payments', callback)
}

PaymentDAO.prototype.getById = function (id, callback) {
	this._connection.query('select * from payments where id = ?', [id], callback)
}

module.exports = function () {
	return PaymentDAO
}

// class PaymentDAO {
// 	constructor(connection) {
// 		this._connection
// 	}
//
// 	save(payment, callback) {
// 		this._connection.query('INSERT INTO payment SET ?', payment, callback)
// 	}
//
// 	list(callback) {
// 		this._connection.query('select * from payment', callback)
// 	}
//
// 	getById(id, callback) {
// 		this._connection.query('select * from payment where id = ?', [id], callback)
// 	}
// }
