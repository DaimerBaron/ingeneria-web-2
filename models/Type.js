import { Schema, model } from 'mongoose';

const TypeSchema = Schema({
    name:{
        type: String,
        required: true
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

export default model('Type', TypeSchema);