const {Schema, model } = require('mongoose');
const EquipementTypeSchema = Schema({
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

module.exports = model('EquipementType', EquipementTypeSchema);