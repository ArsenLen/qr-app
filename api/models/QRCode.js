const mongoose = require('mongoose')

const QRCodeSchema = new mongoose.Schema(
    {
        group : { type : String, required : true },
        img : { type : String, required : true },
    },
    { timestamps : true }
)

module.exports = mongoose.model("qrcodes", QRCodeSchema)