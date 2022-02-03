const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  messageName: String,
  templateSrc: String,
  title: String,
  textFields: String,
  images: [String],
  visableTimeInSeconds: Number,
  dateAndTimeToStartFrame: Date,
  dateAndTimeToEndFrame: Date,
  daysToshow: [Number],
  screens: [String],
});

module.exports = new mongoose.model("Message", messageSchema);