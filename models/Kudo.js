const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudoSchema = new Schema({
    to: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    from: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    title: String,
    message: String
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = Kudo;