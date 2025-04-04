import { Schema, model } from 'mongoose';

const DirectorSchema = Schema({
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
   
})

export default model('Director', DirectorSchema);