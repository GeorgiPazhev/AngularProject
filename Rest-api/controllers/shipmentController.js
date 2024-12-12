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

function getAllShipmentsByUser(req, res, next) {
    const {uid} = req.params;
    shipmentModel.find({userId:uid})
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
    shipmentModel.create({width, height, edge, weight, currency: '6755a15de152d79bee40e600', price, userId})
           .then(shipment => {flightModel.updateOne({ _id: flightId }, { $push: { shipments: shipment._id} }).then((updatedShipment) => res.status(200).json(updatedShipment))})
           .catch(next);
}

module.exports = {
    getAllShipments,
    getAllShipmentsByUser,
    createNewShipment
}