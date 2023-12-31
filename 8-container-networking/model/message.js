const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    message: {
        type: String
    }
})

const message = mongoose.model('message', schema)

exports.Message = message