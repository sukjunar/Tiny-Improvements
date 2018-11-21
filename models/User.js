const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Please enter a valid username."
    },
    password: {
        type: String,
        trim: true,
        required: "Please enter a valid password."
    },
    kudos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Kudo"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;