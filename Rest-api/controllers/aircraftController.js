const { aircraftModel } = require('../models');

function getAircraft(req, res, next) {
    
    aircraftModel.find()
        .then(aircrafts => {
            res.status(200).json(aircrafts)
        })
        .catch(next);
}

function createNewAircraft(req, res, next)
{
    const {pictureUrl, mark, model, payload, volume} =req.body;
    aircraftModel.create({pictureUrl, mark, model, payload, volume})
                 .then((newAircraft) => res.status(200).json(newAircraft))
                 .catch(next);
}

function updateAircraft(req, res, next)
{
    const{aircraftId} = req.params;
    const {pictureUrl, mark, model, payload, volume} =req.body;
    aircraftModel.findOneAndUpdate({_id:aircraftId}, {pictureUrl, mark, model, payload, volume, retired:false})
                 .then((updatedAircraft) => res.status(200).json(updatedAircraft))
                 .catch(next);
}

function deleteAircraft(req, res, next)
{
    const{aircraftId} = req.params;
    aircraftModel.findOneAndUpdate({_id:aircraftId}, {retired:true})
                 .then((updatedAircraft) => res.status(200).json(updatedAircraft))
                 .catch(next);
}

module.exports = {
    getAircraft,
    updateAircraft,
    createNewAircraft,
    deleteAircraft,
}
