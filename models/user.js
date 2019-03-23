const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  zip: { type: String },
  provider: String,
  provider_id: { type: String },
  provider_pic: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

