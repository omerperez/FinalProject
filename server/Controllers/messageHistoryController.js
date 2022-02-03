const { request } = require("express");
const messageHistorySchema = require("../Models/MessageHistory");

const getAllHistory = (req, res) => {
    messageHistorySchema.find().then((results) => {
      try {
        res.json(results);
        console.log("OK");
      } catch {
        console.log("Error");
      }
    });
};

const getRelevantHistory = (req, res) => {
  messageHistorySchema.find().then((results) => {
    try {
      results.sort( (a, b) => {
          return new Date(b.time) - new Date(a.time);
      });

      res.json(results);
      console.log("OK");
    } catch {
      console.log("Error");
    }
  });
};

const creatNewScreenHistory = async (screenNumber) => {
  const newScreenHistory = {
    screens: screenNumber,
    time: Date.now(),
  };
  
  const findScreen = messageHistorySchema.findOne({screens : screenNumber});
  if(findScreen != null){
    await messageHistorySchema.deleteOne({ screens: screenNumber });
  }

  await messageHistorySchema.create(newScreenHistory);
}

module.exports = {
  getAllHistory,
  creatNewScreenHistory,
  getRelevantHistory,
};
