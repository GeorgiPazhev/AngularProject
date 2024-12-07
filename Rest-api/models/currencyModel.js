const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const currencySchema = new mongoose.Schema(
    {
    name:
    {
        type: String,
        required:true
    },
    abbreviature:
    {
        type: String,
        required:true
    }
     }, { _id: true });

module.exports = mongoose.model('Currency', currencySchema);
