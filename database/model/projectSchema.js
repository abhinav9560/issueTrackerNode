const mongoose = require("mongoose");

const project = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Project', project);