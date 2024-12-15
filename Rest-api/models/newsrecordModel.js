const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const newsrecordSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    authorId: {
        type: ObjectId,
        ref: "User"
    }
}, { _id: true, timestamps: { createdDate: 'created_at',  updatedDate: 'updated_at'} });

module.exports = mongoose.model('NewsRecord', newsrecordSchema);
