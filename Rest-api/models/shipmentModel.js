const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const shipmentSchema = new mongoose.Schema(
    {
    userId:
    {
        type: ObjectId,
        ref: "User"
    },
    weight:
    {
        type: Number,
        required:true
    },
    price:
    {
        type: Number,
        required:true
    },
    currency:
    {
        type:ObjectId,
        ref:"Currency",
        required:true
    },
    width:
    {
        type: Number,
        required:true
    },
    height:
    {
        type: Number,
        required:true
    },
    edge:
    {
        type: Number,
        required:true
    },
    flightId:
    {
        type: ObjectId,
        ref: "Flight"
    }
     }, { _id: true });

module.exports = mongoose.model('Shipment', shipmentSchema);
