const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/Vehicle.controller');

router.post('/add', vehicleController.add);

router.get('/get', vehicleController.get);

router.post('/update', vehicleController.update);

router.delete('/delete/:id', vehicleController.delete);

router.get('/getOne/:id', vehicleController.getOne);

module.exports = router