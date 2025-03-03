import { Schema, model } from 'mongoose';

const GenreSchema = Schema({
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
    description:{
        type: String,
        required: true
    }
})

export default model('Genre', GenreSchema);