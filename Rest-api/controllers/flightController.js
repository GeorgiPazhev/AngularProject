const { flightModel } = require('../models');

function getFlights(req, res, next) {
    
    flightModel.find()
        .populate('aircraft')
        .populate('shipments')
        .populate('departureAirport')
        .populate('arrivalAirport')
        .then(flights => {
            res.status(200).json(flights)
        })
        .catch(next);
}

module.exports = {
    getFlights,
}