const { airportModel, addressModel } = require('../models');

function getAirport(req, res, next) {
    
    airportModel.find()
        .then(airports => {
            res.status(200).json(airports)
        })
        .catch(next);
}

function createAirport(req, res, next)
{
    const {name, country, province, settlement, street, lat, lon} = req.body;
    Promise.all([
      airportModel.create({name}),
      addressModel.create({country, province, settlement,street, lat, lon})  
    ]).then(([createdAirport, createdAddress])=>
    {
        if(createdAirport && createdAddress)
        {
            airportModel.updateOne({_id: createAirport._id}, {address:createdAddress._id})
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
    const {name, country, province, settlement, street, lat, lgn, addressId} = req.body;
    Promise.all([
      airportModel.updateOne({_id: airportId},{name}),
      addressModel.updateOne({_id: addressId},{country, province, settlement,street, lat, lgn})  
    ])
    .then(([updatedAirport, updatedAddress])=>
    {
        if(updatedAirport && updatedAddress)
        {
            res.status(200).json(updatedAirport);
        }
        else
        {
            res.status(401).json({ message: `Not allowed to create new airport!` });
        }
    })
    .catch(next);
}

module.exports = {
    getAirport,
    createAirport,
    updateAirport,
}