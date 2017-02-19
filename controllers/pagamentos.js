module.exports = (app) => {

	app.route('/payments')
		.get((req, res) => {
			res.status(200).send('Hello World')
		})
		.post((req, res) => {
			req.assert('payment_format', 'The payment format is mandatory.')
				.notEmpty()
			req.assert('value', 'The value is mandatory and must be a decimal number')
				.notEmpty()
				.isFloat()
			const errors = req.validationErrors()

			if(errors) {
				return res.status(400).send(errors)
			}

			const json = req.body
			json.status = 'CRIADO'
			json.date = new Date()

			const connection = app.persistence.connectionFactory()
			const paymentDAO = new app.persistence.PaymentDAO(connection)

			paymentDAO.save(json, function(error, result) {
				if(error) {
					console.log('Error trying to insert into the data base: '+ error);
					return res.status(412).send({msg: error})
				}

				console.log('Payment Created')
				res.status(201).json(json)
			})
		})
}
