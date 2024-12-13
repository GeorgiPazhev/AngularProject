const { flightModel } = require('../models');

function getFlights(req, res, next) {
    
    flightModel.find({ departureDate: { $gte: new Date() } })
        .populate('aircraft')
        .populate('shipments')
        .populate('departureAirport')
        .populate('arrivalAirport')
        .then(flights => {
            res.status(200).json(flights)
        })
        .catch(next);
}

function getFlight(req, res, next) {
    const{ id } = req.params;
    flightModel.findById(id)
        .populate('aircraft')
        .populate('shipments')
        .populate('departureAirport')
        .populate('arrivalAirport')
        .then(flights => {
            res.status(200).json(flights)
        })
        .catch(next);
}

function createNewFlight(req, res, next) {
    const {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft} = req.body;
    flightModel.create({departureAirport, arrivalAirport, arrivalDate: new Date(arrivalDate), departureDate: new Date(departureDate), aircraft, shipments:[]})
               .then( (flight) => res.status(200).json(flight))
               .catch(next);

}

module.exports = {
    getFlights,
    getFlight,
    createNewFlight,
}