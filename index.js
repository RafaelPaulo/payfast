import express from './config/custom-express'

const app = express()

app.listen(3000, () => {
	console.log('Server running on the port 3000');
})
