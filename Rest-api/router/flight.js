const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { flightController } = require('../controllers');

// middleware that is specific to this router

router.get('/', auth(), flightController.getFlights);
router.get('/:id', auth(), flightController.getFlight);

module.exports = router