const express = require('express')
const ctrlSd = require('../controller/sd.js')
const routeSd = express.Router()

routeSd.get('/sd', ctrlSd.getsd)
routeSd.post('/sd',ctrlSd.postSd )
routeSd.get('/sd/:id', ctrlSd.getSdById)
routeSd.put('/sd/:id', ctrlSd.updateSd)
routeSd.delete('/sd/:id', ctrlSd.deleteSd)

module.exports = routeSd