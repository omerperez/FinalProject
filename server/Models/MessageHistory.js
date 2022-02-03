const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../db/index");

const messageHistorySchema = new Schema({
  screens: String,
  time: Date,
});

module.exports = new mongoose.model("History", messageHistorySchema);
