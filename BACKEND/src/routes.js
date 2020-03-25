const express = require('express')
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')


const routes = express.Router()
//session
routes.post('/sessions',SessionController.create)

// list
routes.get('/ongs',OngController.index)
routes.get('/incidents',IncidentController.index)

//profile
routes.get('/profile',ProfileController.index)

//Create
routes.post('/ongs',OngController.create)
routes.post('/incidents',IncidentController.create)

//delete
routes.delete('/incidents/:id',IncidentController.delete)


module.exports = routes;