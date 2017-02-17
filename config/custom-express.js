import express from 'express'
import consign from 'consign'
import bodyParser from 'body-parser'

module.exports = () => {

	const app = express()

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))

	consign()
		.include('controllers')
		.into(app)

	return app
}
