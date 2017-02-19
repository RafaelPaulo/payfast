module.exports = (app) => {

	app.route('/payments')
		.get((req, res) => {
			res.status(200).send('Hello World')
		})
		.post((req, res) => {
			const json = req.body
			console.log(json)
			res.status(201).send(json)
		})
}
