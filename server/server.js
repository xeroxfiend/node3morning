require('dotenv').config()
const express = require('express')
const app = express()
const SERVER_PORT = process.env.SERVER_PORT

app.use(express.json())


app.listen(SERVER_PORT, () => {
     console.log(`Listening on port ${SERVER_PORT}`)
})