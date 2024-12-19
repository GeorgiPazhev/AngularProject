const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { flightController } = require('../controllers');

// middleware that is specific to this router

router.get('/', flightController.getFlights);
router.get('/:id', auth(), flightController.getFlight);
router.post("/", auth(), flightController.createNewFlight);
router.put("/:id", auth(), flightController.updateFlight);
router.delete("/:id", auth(), flightController.deleteFlight);

module.exports = router