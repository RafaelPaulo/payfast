import express from './config/custom-express'

const app = express()
const PORT = app.get('port')

app.listen(PORT, () => {
	console.log('Server running on the port 3000');
})
