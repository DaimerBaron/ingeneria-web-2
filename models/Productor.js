import { Schema, model } from 'mongoose';

const ProducerSchema = Schema({
    name:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    dateUpdated:{
        type: Date,
        default: Date.now
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