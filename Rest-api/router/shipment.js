const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { shipmentController } = require('../controllers');

// middleware that is specific to this router

router.get('/:flight/all', auth(), shipmentController.getAllShipmentsByFlight);
router.get('/:flight', auth(), shipmentController.getAllShipmentsByUserAndFlight);
router.post('/', auth(), shipmentController.createNewShipment);
router.put('/:shipmentId', auth(), shipmentController.updateShipment);
router.delete('/:flightId/:shipmentId', auth(), shipmentController.removeShipment);

module.exports = router