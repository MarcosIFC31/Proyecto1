var express = require('express');
var router = express.Router();


const carControler = require('../Controllers/cars-controller');
router.get('/listacars', carControler.listacars)
module.exports = router;
