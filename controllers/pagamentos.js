module.exports = (app) => {

	app.route('/payment')
		.get((req, res) => {
			res.status(200).send('Hello World')
		})

}
