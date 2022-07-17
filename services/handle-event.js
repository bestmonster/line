const services = require("../services/handle-message");


//event handler
exports.handleEvent = (event) => {
  switch (event.type) {
    case "message":
      switch (event.message.type) {
        case "text":
            services.handleMessage(event)
        case "sticker":
          console.log("sticker message");
          break;
        default:
          throw new Error("UNknow event" + JSON.stringify(event.message.type));
      }
      break;
    case "postback":
      console.log("postback");
      break;
    default:
      throw new Error("UNknow event" + JSON.stringify(event));
  }
};
