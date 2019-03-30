const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  title: { type: String, required: true },
  time: { type: String, required: false },
  zip: { type: String, required: true },
  notes: String,
  available: { type: Boolean, default: false },
  date: { type: Date },
  requesterId: { type: String, required: true }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
