const { flightModel } = require('../models');

function getFlights(req, res, next) {
    
    flightModel.find({ departureDate: { $gte: new Date() } })
            .sort({ departureDate: 'desc' })
            .populate('aircraft')
            .populate('shipments')
            .populate('departureAirport')
            .populate('arrivalAirport')
            .then(flights => {
                res.status(200).json(flights)
            })
            .catch(next);
}

function getAllFlights(req, res, next)
{
    flightModel.find()
        .sort({ departureDate: 'desc' })
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

function updateFlight(req, res, next)
{
    const{ id } = req.params;
    const {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft, status} = req.body;
    flightModel.findOneAndUpdate({_id: id}, {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft, status})
               .then((updatedFlight) => res.status(200).json(updatedFlight))
               .catch(next);

}

function deleteFlight(req, res, next)
{
    const{ id } = req.params;
    flightModel.findOneAndUpdate({_id: id}, {status:"Cancelled"})
               .then((updatedFlight) => res.status(200).json(updatedFlight))
               .catch(next);
}

function createNewFlight(req, res, next) {
    const {departureAirport, arrivalAirport, arrivalDate, departureDate, aircraft} = req.body;
    flightModel.create({departureAirport, arrivalAirport, arrivalDate: new Date(arrivalDate), departureDate: new Date(departureDate), aircraft, status:"New", shipments:[]})
               .then( (flight) => res.status(200).json(flight))
               .catch(next);

}

module.exports = {
    getAllFlights,
    getFlights,
    getFlight,
    createNewFlight,
    updateFlight,
    deleteFlight,
}