const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const addressSchema = new mongoose.Schema(
    {
    country: {
        type: String,
        required:true
    },
    province:
    {
     type: String,
     required:true
    },
    settlement:
    {
        type: String,
        required:true
    },
    street:
    {
        type: String,   
    },
    lat:
    {
        type:String
    },
    lng:
    {
        type: String
    }
     }, { _id: true });

module.exports = mongoose.model('Address', addressSchema);
