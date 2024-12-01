const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { aircraftController } = require('../controllers');

// middleware that is specific to this router

router.get('/', aircraftController.getAircraft);

module.exports = router