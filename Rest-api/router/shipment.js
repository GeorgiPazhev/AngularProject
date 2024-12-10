const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { shipmentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', auth(), shipmentController.getAllShipments);
router.get('/:uid', auth(), shipmentController.getAllShipmentsByUser);

module.exports = router