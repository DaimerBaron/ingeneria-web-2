const {Schema, model} = require('mongoose');

const DirectorSchema = Schema({
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
})

module.exports = model('Director', DirectorSchema);