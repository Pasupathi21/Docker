const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    note: {
        type: String
    }
})

exports.Notes = mongoose.model('notes', schema)