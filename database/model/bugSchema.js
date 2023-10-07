const mongoose = require("mongoose");


const bug = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    labels: [String],
    author: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        ref: 'Project',
        required: true
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
})

module.exports = mongoose.model('Bug', bug);