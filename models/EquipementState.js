const {Schema, model } = require('mongoose');
const EquipementStateSchema = Schema({
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

module.exports = model('EquipementState', EquipementStateSchema);