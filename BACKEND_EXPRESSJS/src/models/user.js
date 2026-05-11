const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  avatar: String,
  address: String,
  phone: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
