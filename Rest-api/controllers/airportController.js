const { airportModel, addressModel } = require('../models');

function getAirport(req, res, next) {
    
    airportModel.find()
        .populate('address')
        .then(airports => {
            res.status(200).json(airports)
        })
        .catch(next);
}

function getSingleAirport(req, res, next) {
    const{id} = req.params;
    airportModel.findOne({_id:id})
        .populate('address')
        .then(airport => {
            res.status(200).json(airport)
        })
        .catch(next);
}

function createAirport(req, res, next)
{
    const {name, country, province, settlement, street, lat, lng} = req.body;
    Promise.all([
      airportModel.create({name}),
      addressModel.create({country, province, settlement,street, lat, lng})  
    ]).then(([createdAirport, createdAddress])=>
    {
        if(createdAirport && createdAddress)
        {
            airportModel.findByIdAndUpdate({_id: createdAirport._id}, {address:createdAddress._id})
                        .then((updatedAirport) => res.status(200).json(updatedAirport));
        }
        else
        {
            res.status(401).json({ message: `Not allowed to create new airport!` });
        }
    })
    .catch(next);
}

function updateAirport(req, res, next)
{
    const {airportId} = req.params;
    const {name, country, province, settlement, street, lat, lng, addressId} = req.body;
    
    Promise.all([
      airportModel.findByIdAndUpdate({_id: airportId},{name}),
      addressModel.findByIdAndUpdate({_id: addressId},{country, province, settlement,street, lat, lng})  
    ])
    .then(([updatedAirport, updatedAddress])=>
    {
        if(updatedAirport && updatedAddress)
        {
            res.status(200).json(updatedAirport);
        }
        else
        {
            res.status(401).json({ message: `Not allowed to update any airport!` });
        }
    })
    .catch(next);
}

module.exports = {
    getAirport,
    getSingleAirport,
    createAirport,
    updateAirport,
}