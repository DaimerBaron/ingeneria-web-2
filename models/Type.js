import { Schema, model } from 'mongoose';

const TypeSchema = Schema({
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

modules.exports = model('Type', TypeSchema);