const express = require('express')
const ctrlSmp = require('../controller/smp.js')
const routeSmp = express.Router()

routeSmp.get('/smp', ctrlSmp.getsd)
routeSmp.post('/smp',ctrlSmp.postSd )
routeSmp.get('/smp/:id', ctrlSmp.getSdById)
routeSmp.put('/smp/:id', ctrlSmp.updateSd)
routeSmp.delete('/smp/:id', ctrlSmp.deleteSd)

module.exports = routeSmp