const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("tasksModel", tasksSchema);
