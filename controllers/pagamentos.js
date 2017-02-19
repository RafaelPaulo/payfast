module.exports = (app) => {

	app.route('/payments')
		.get((req, res) => {
			res.status(200).send('Hello World')
		})
		.post((req, res) => {
			const json = req.body
			const connection = app.persistence.connectionFactory()
			const paymentDAO = new app.persistence.PaymentDAO(connection)

			paymentDAO.save(json, function(error, result) {
				console.log('Payment Created')
				res.json(json)
			})
		})
}
