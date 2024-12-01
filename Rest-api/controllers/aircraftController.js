const { aircraftModel } = require('../models');

function getAircraft(req, res, next) {
    
    aircraftModel.find()
        .then(aircrafts => {
            res.status(200).json(aircrafts)
        })
        .catch(next);
}

module.exports = {
    getAircraft,
}
