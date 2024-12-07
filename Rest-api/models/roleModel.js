const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const roleSchema = new mongoose.Schema(
    {
    name:
    {
        type: String,
        required:true
    }
     }, { _id: true });

module.exports = mongoose.model('Role', roleSchema);
