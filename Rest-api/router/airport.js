const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { airportController } = require('../controllers');

// middleware that is specific to this router

router.get('/', airportController.getAirport);

module.exports = router