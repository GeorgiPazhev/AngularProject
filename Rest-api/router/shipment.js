const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { shipmentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', auth(), shipmentController.getAllShipments);
router.get('/:flight', auth(), shipmentController.getAllShipmentsByUserAndFlight);
router.post('/', auth(), shipmentController.createNewShipment);
router.delete('/:flightId/:shipmentId', auth(), shipmentController.removeShipment);

module.exports = router