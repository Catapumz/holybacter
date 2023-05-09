const { Schema, model } = require("mongoose");

const StackSchema = Schema({
  volValue: {
    type: Number,
    required: true,
  },
  surname: String,
  ph_act: {
    type: Number,
    required: true,
  },
  tds_value: {
    type: Number,
    required: true,
  },
  edited_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Stack", StackSchema, "stacks");
