const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller.js');

router.post('/city',CityController.create);

module.exports = router;