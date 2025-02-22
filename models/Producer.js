import { Schema, model } from 'mongoose';

const ProducerSchema = Schema({
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
    },
    slogan:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
})

export default model('Producer', ProducerSchema);