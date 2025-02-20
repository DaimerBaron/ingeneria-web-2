const {Schema, model} = require('mongoose');

const GenreSchema = Schema({
    name:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    dateUpdated:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = model('Genre', GenreSchema);