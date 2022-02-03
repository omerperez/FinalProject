const res = require("express/lib/response");
const messageSchema = require("../Models/Message");
const messageHistoryController = require("./messageHistoryController");

const getAllMessages = (req, res) => {
   messageSchema.find().then((results) => {
     try { 
      res.json(results);
      console.log("OK");
     } catch {
       console.log("Error");
     }
   });
};

const getMessageById = (req, res) => {
  const messageId = req.params.id;
  console.log(req.params);
  messageSchema.findById(messageId).then((results) => {
    try {
      res.json(results);
      console.log("OK");
    } catch {
      console.log("Error");
    }
  });
};

const deleteMessage = (req, res) => {
  console.log(req.params.id);
  const _id = req.params.id;
  const user = messageSchema.deleteOne({ _id: _id }).then((results) => {
    return res.json(results);
  });
};

const getMessagesByScreenNumber = (request, respons) => {
  const screen = request.params.screen;
  messageSchema
    .find({ screens: screen.charAt(screen.length - 1) })
    .then((results) => {
      try {
        respons.json(results);
        messageHistoryController.creatNewScreenHistory(
          screen.charAt(screen.length - 1)
        );
        console.log("OK");
      } catch {
        console.log("Error");
      }
    });
}

async function createMessage(req, res) {
  console.log(req.body)

  // let dayToShow = req.body.daysToshow;
  // for (var i = 0; i < dayToShow.length; i++){
  //   dayToShow[i] == "Sunday"
  //     ? 1
  //     : dayToShow[i] == "Monday"
  //     ? 2
  //     : dayToShow[i] == "Tuesday"
  //     ? 3
  //     : dayToShow[i] == "Wednesday"
  //     ? 4
  //     : dayToShow[i] == "Thursday"
  //     ? 5
  //     : dayToShow[i] == "Friday"
  //     ? 6
  //     : 7
  // }

  const createNewMessage = {
    messageName: req.body.messageName,
    templateSrc: "./template " + req.body.templateSrc,
    title: req.body.title,
    textFields: req.body.textFields,
    images: req.body.images,
    visableTimeInSeconds: parseInt(req.body.visableFor),
    dateAndTimeToStartFrame: Date(req.body.dateAndTimeToStartFrame),
    dateAndTimeToEndFrame: Date(req.body.dateAndTimeToEndFrame),
    daysToshow: req.body.daysToshow,
    screens: req.body.screens,
  };

  const findMessage = messageSchema.findOne({ messageName: createNewMessage.messageName });
  if (findMessage != null) {
    await messageSchema.deleteOne({ messageName: createNewMessage.messageName });
  }
  await messageSchema.create(createNewMessage);
  return res.send(createNewMessage);
}

module.exports = {
  getAllMessages,
  getMessagesByScreenNumber,
  deleteMessage,
  createMessage,
  getMessageById,
};

/*
// Create all the message when the server is start running (delete the oldest)
const create = () => {
  createMessage(
    "message1",
    "Template 1",
    "Mexico",
    ["Mexico", "New York"],
    ["/Mexico.png"],
    "20",
    ["asdasd", "asdasdasd"],
    ["2"]
  );

  createMessage(
    "message2",
    "Template 2",
    "Seychelles",
    ["Seychelles", "line 2 for example"],
    ["/Seychelles.png"],
    "20",
    ["March 1, 2021", "April 30, 2021"],
    ["1", "3"]
  );

  createMessage(
    "message3",
    "./template 2",
    "Australia",
    ["Australia", "line 2 for example", "line 3 for example"],
    ["/Australia.png"],
    "20",
    ["1", "2", "3", "4", "5", "6", "7"],
    ["2", "3"]
  );

  createMessage(
    "message4",
    "Template 3",
    "Hawaii",
    [
      "Hawaii",
      "line 2 for example",
      "line 3 for example",
      "line 4 for example",
      "line 5 for example",
    ],
    ["/Hawaii.png"],
    "20",
    ["3", "4"],
    ["1"]
  );

  createMessage(
    "message5",
    "Template 3",
    "Corfu",
    ["Corfu", "line 2 for example", "line 3 for example", "line 4 for example"],
    ["/Corfu.png"],
    "20",
    ["1", "3", "4"],
    ["3"]
  );
};
*/