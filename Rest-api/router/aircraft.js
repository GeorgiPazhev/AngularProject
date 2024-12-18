const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { aircraftController } = require('../controllers');

// middleware that is specific to this router

router.get('/', aircraftController.getAircraft);
router.post('/', auth(), aircraftController.createNewAircraft);
router.put('/:aircraftId', auth(), aircraftController.updateAircraft);
router.delete('/:aircraftId', auth(), aircraftController.deleteAircraft);

module.exports = router