const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: Boolean,
    require: true,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
