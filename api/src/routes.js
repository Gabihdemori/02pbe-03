const express = require('express');
const routes = express.Router();

const clientes = require('./controller/controllerclientes')

const comidas = require('./controller/controllercomidas')

routes.get('/clientes', clientes.read)
routes.post('/clientes', clientes.create)
routes.put('/clientes/:id', clientes.update)
routes.delete('/clientes/:id', clientes.del)

routes.get('/comidas', comidas.read)
routes.post('/comidas', comidas.create)
routes.put('/comidas/:id', comidas.update)
routes.delete('/comidas/:id', comidas.del)




module.exports = routes