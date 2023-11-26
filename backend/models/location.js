const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    }
})


const Location = mongoose.model('Location', locationSchema)

module.exports = Location;