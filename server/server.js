require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controllers/controller')

app.use(express.json())

app.get('/api/person', ctrl.getAllFirstNames)

app.post('/api/person', ctrl.addNew)

app.put('/api/person/:id', ctrl.updateLastName)

app.delete('/api/person/:id', ctrl.delete)

app.get('/api/person/:id', ctrl.getOnePerson)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to db')
    app.listen(SERVER_PORT, () => {
         console.log(`Listening on port ${SERVER_PORT}`)
    })
})
