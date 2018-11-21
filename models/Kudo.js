const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudoSchema = new Schema({
    title: String,
    message: String
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = Kudo;