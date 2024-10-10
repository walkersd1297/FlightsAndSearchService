const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller.js');
const AirportController = require('../../controllers/airport-controller.js');

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city',CityController.getAll);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);

router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.get('/airport',AirportController.getAll);
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);


module.exports = router;