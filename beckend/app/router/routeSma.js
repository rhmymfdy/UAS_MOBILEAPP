const express = require('express')
const ctrlSma = require('../controller/sma.js')
const routeSma = express.Router()

routeSma.get('/sma', ctrlSma.getsd)
routeSma.post('/sma',ctrlSma.postSd )
routeSma.get('/sma/:id', ctrlSma.getSdById)
routeSma.put('/sma/:id', ctrlSma.updateSd)
routeSma.delete('/sma/:id', ctrlSma.deleteSd)

module.exports = routeSma