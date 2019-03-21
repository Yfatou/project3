const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  service: { type: String, required: true },
  available: { type: Boolean, default: false },
  time: String,
  date: { type: Date, default: Date.now }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
