var express = require('express');
var router = express.Router();


const carControler = require('../Controllers/cars-controller');
router.get('/api/listacars', carcontroler.listacars)
module.exports = router;
