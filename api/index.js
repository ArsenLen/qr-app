const express = require("express");
const mongoose = require("mongoose");
const QRCode = require("qrcode");
const dotenv = require("dotenv");
const cors = require("cors");
const schedule = require("node-schedule");
const qrcodeRoute = require('./routes/qrcodes')  
const QRCodeSchema = require("./models/QRCode")

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });

const generateQR = async (text) => {
    const date = Date.now()
    QRCodeSchema.create({
        group : "PN-18",
        img : date.toString()
    })
  try {
    const file = await QRCode.toFile(`images/${date.toString()}.png`, [
      { data: "http://localhost:3000/success", mode: "byte" },
    ]);
  } catch (err) {
    console.error(err);
  }
};

const job = schedule.scheduleJob("00 12 * * *", function () {
  generateQR()
});

app.use(cors())
app.use(express.json())
app.use("/api", qrcodeRoute)
app.use("/images", express.static('images'))

app.listen(5000, () => {
  console.log("hello");
});
