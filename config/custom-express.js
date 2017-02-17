import express from 'express'
import consign from 'consign'

module.exports = () => {

	const app = express()

	consign()
		.include('controllers')
		.into(app)

	return app
}
