const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  task: String,
  // email: String,
});

module.exports = mongoose.model("Task", taskSchema);
