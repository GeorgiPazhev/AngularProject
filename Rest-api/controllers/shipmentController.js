const { ObjectId } = require('mongoose');
const { shipmentModel, flightModel } = require('../models');

function getAllShipments(req, res, next) {
    
    shipmentModel.find()
        .populate('userId')
        .populate('currency')
        .then(shipments => {
            res.status(200).json(shipments)
        })
        .catch(next);
}

function getAllShipmentsByUserAndFlight(req, res, next) {
    const {_id: userId} = req.user;
    const {flight} = req.params;
    shipmentModel.find({userId: userId, flightId:flight})
        .populate('userId')
        .populate('currency')
        .then(shipments => {
            res.status(200).json(shipments)
        })
        .catch(next);
}

function createNewShipment(req, res, next)
{
    const { width, height, edge, weight, flightId} = req.body;
    const { _id: userId } = req.user;
    const price = weight * 3; 
    shipmentModel.create({width, height, edge, weight, currency: '6755a15de152d79bee40e600', price, userId, flightId})
           .then(shipment => {flightModel.updateOne({ _id: flightId }, { $push: { shipments: shipment._id} }).then((updatedShipment) => res.status(200).json(updatedShipment))})
           .catch(next);
}

function updateShipment(req, res, next)
{
    const {shipmentId} = req.params;
    const { width, height, edge, weight, flightId, previousFlightId} = req.body;
    const { _id: userId } = req.user;
    const price = weight * 3;
    Promise.all([
        shipmentModel.findOneAndUpdate({_id:shipmentId},{width, height, edge, weight, price, userId, flightId}),
        flightModel.findOneAndUpdate({ _id: flightId }, { $push: { shipments: shipmentId} }),
        flightModel.findOneAndUpdate({ _id: previousFlightId }, { $pull: { shipments: shipmentId} })
    ])
    .then(([updatedShipment, changedFlight, _])=>{
        if(updatedShipment)
        {
            res.status(200).json(updatedShipment);
        }
        else
        {
            res.status(401).json({ message: `Edit not allowed!` });
        }
    })
    .catch(next);
    

    shipmentModel.findOneAndUpdate({width, height, edge, weight, price, userId, flightId})
           .then(shipment => {flightModel.updateOne({ _id: flightId }, { $push: { shipments: shipment._id} }).then((updatedShipment) => res.status(200).json(updatedShipment))})
           .catch(next);
}

function removeShipment(req, res, next)
{
    const { flightId, shipmentId } = req.params;
    Promise.all([
        shipmentModel.findOneAndDelete({ _id: shipmentId, flightId }),
        flightModel.findOneAndUpdate({ _id: flightId }, { $pull: { shipments: shipmentId } }),
    ])
    .then(([deletedOne, _]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

module.exports = {
    getAllShipments,
    getAllShipmentsByUserAndFlight,
    createNewShipment,
    updateShipment,
    removeShipment,
}