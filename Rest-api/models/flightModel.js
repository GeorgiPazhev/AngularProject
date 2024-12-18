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
        type: Date,
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
        type: Date,
        required:true
    },
    arrivalAirport:
    {
        type: ObjectId,
        ref: "Airport",
        required:true
    },
    status:
    {
        type:String,
        required:true
    }
     }, { _id: true });

module.exports = mongoose.model('Flight', flightSchema);
