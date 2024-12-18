const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const aircraftSchema = new mongoose.Schema(
    {
    pictureURL: {
        type: String,
        required:true
    },
    mark:
    {type: String,
     required:true
    },
    model:
    {
        type: String,
        required:true
    },
    volume:
    {
        type: Number,
        required:true
    },
    payload:
    {
        type: Number,
        required:true
    },
    retired:
    {
        type: Boolean,
        required:true
    }
     }, { _id: true });

module.exports = mongoose.model('Aircraft', aircraftSchema);
