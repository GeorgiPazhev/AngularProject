const { airportModel } = require('../models');

function getAirport(req, res, next) {
    
    airportModel.find()
        .then(airports => {
            res.status(200).json(airports)
        })
        .catch(next);
}

module.exports = {
    getAirport,
}