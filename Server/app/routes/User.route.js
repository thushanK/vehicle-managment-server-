const express = require('express');
const router = express.Router();

const userController = require('../controllers/User.controller');

router.post('/add', userController.add);

router.get('/get', userController.get);

router.post('/update', userController.update);

router.delete('/delete/:id', userController.delete);

router.get('/getOne/:id', userController.getOne);

module.exports = router