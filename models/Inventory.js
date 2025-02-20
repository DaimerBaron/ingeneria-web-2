const { Schema, model } = require("mongoose");
const InventorySchema = Schema({
  serial: {
    type: String,
    required: true,
    unique: true,
  },

  modelo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    equipementState:{
        type: Schema.Types.ObjectId,
        ref: "EquipementState",
        required: true,
    },
    equipementType:{
        type: Schema.Types.ObjectId,
        ref: "EquipementType",
        required: true,
    },
});

module.exports = model("Inventory", InventorySchema);
