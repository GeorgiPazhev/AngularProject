const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const shipmentSchema = new mongoose.Schema(
    {
    user:
    {
        type: ObjectId,
        ref: "User"
    },
    volume:
    {
        type: Number,
        required:true
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
    }
     }, { _id: true });

module.exports = mongoose.model('Shipment', shipmentSchema);
