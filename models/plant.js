const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plant_name: String,
    nickname: String,
    spot: String,
    from: String,
    img: String,
    lastWatered: {type: Date},
    waterCycle: String
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;