const {Schema, model } = require('mongoose');
const BrandSchema = Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
})

module.exports = model('Brand', BrandSchema);