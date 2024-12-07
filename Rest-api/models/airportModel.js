const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const airportSchema = new mongoose.Schema(
    {
    name:
    {
        type: String,
        required:true
    },
    address:
    {
        type: ObjectId,
        ref: "Address"
    }
     }, { _id: true });

module.exports = mongoose.model('Airport', airportSchema);
