var express = require('express');
var router = express.Router();


const carControler = require('../controllers/cars-controller');
router.get('/api/listacars', carControler.listacars)
module.exports = router;
