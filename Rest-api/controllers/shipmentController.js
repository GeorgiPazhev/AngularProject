const { shipmentModel } = require('../models');

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

module.exports = {
    getAllShipments,
    getAllShipmentsByUser
}