const mongoose = require("mongoose");

const User = mongoose.Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
});
