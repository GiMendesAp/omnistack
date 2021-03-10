const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController'); 
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

//rota de login
routes.post('/sessions', SessionController.create); 

//rota de listagem de ongs
routes.get('/ongs', OngController.index);
//rota de cadastro da ong
routes.post('/ongs', OngController.create);

//rota de listagem de casos de uma ong específica
routes.get('/profile', ProfileController.index); 

//rota de listagem de todos casos
routes.get('/incidents', IncidentController.index); 
//rota de cadastro de casos
routes.post('/incidents', IncidentController.create); 
//rota de deletar casos
routes.delete('/incidents/:id', IncidentController.delete); 

module.exports = routes;