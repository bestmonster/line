const services = require("../services/handle-message");
const { handlePostback } = require("./handle-postback");

//event handler
exports.handleEvent = (event) => {
   switch (event.type) {
      case "message":
         switch (event.message.type) {
            case "text":
               services.handleMessage(event);
               break;
            case "sticker":
               console.log("sticker message");
               break;
            default:
               throw new Error(
                  "UNknow event" + JSON.stringify(event.message.type)
               );
         }
         break;
      case "postback":
         // console.log("Room Pro ID:" + event.postback.data);
         handlePostback(event);
         break;
      case "follow":
         console.log("Follow user" + event.sorce.userId);
         break;
         case "unfollow":
         console.log("unfollow user");
         break;
      default:
         throw new Error("UNknow event" + JSON.stringify(event));
   }
};
