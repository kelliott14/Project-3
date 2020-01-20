const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plant_name: String,
    nickname: String,
    spot: String,
    from: String,
    lastWatered: {type: Date},
    waterCycle: String,
    nextWater: Number,
    nextWaterDate: {type: Date},
    img: { data: Buffer, contentType: String}
    }, 
    {
    timestamps: true
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;