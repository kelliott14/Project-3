const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    profile_img: String,
    plant: {
        type: Schema.Types.ObjectId,
        ref: "Plant"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;