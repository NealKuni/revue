const mongoose = require('mongoose');
// const multer = require('multer')

const ReviewSchema = new mongoose.Schema({
    title: { type: String, required: true},
    location: { type: String, required: true},
    review: { type: String, required: true},
    image: { type: String, required: true},  
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
}, { timestamps: true }); 


module.exports = mongoose.model('Review', ReviewSchema);