var express = require('express');
var router = express.Router();


const carControler = require('../Controllers/cars-controller');
router.get('/listacars', carControler.listacars)
router.get('/GetCarId/:id', carControler.GetCarId)
module.exports = router;
