const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const flightSchema = new mongoose.Schema(
    {
    shipments:[
    {
        type: ObjectId,
        ref: "Shipment"
    }],
    aircraft:
    {
        type: ObjectId,
        ref: "Aircraft",
        required:true
    },
    departureDate:
    {
        type: String,
        required:true
    },
    departureAirport:
    {
        type: ObjectId,
        ref: "Airport",
        required:true
    },
    arrivalDate:
    {
        type: String,
        required:true
    },
    arrivalAirport:
    {
        type: ObjectId,
        ref: "Airport",
        required:true
    }
     }, { _id: true });

module.exports = mongoose.model('Flight', flightSchema);
