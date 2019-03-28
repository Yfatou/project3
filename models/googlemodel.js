const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleSchema = new Schema({
    googleId: {type: String},
    tokenId: {type: String},
    email: { type: String},
    email_verified: { type: Boolean},
    name: { type: String},
    picture: { type: String},
    given_name: { type: String},
    family_name: { type: String},
    locale: { type: String}
  });

const Google = mongoose.model("Google", googleSchema);

module.exports = Google;