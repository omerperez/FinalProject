const express = require("express");
const mongoose = require("mongoose");
const messageController = require("../Controllers/messageController");
const messageHistoryController = require("../Controllers/messageHistoryController");
const router = express.Router();


router.get("/messages/:screen", messageController.getMessagesByScreenNumber);

router.get("/show/:id", messageController.getMessageById);

router.get("/history", messageHistoryController.getAllHistory);

router.get("/screenHistory", messageHistoryController.getRelevantHistory);

router.get("/", messageController.getAllMessages);

router.post("/create", messageController.createMessage);

router.delete("/delete/:id", messageController.deleteMessage);

module.exports = router;
