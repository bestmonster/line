const config = require("../config/line");
const { sendImage } = require("./send-image");
const { sendImageMap } = require("./send-imagemap");
const { sendFlexCovidInfo } = require("./send-flex-covid-info");
const { sendFlexPromotion } = require("./send-flex-promotion");
const { sendText } = require("./send-text");

exports.handleMessage = async (event) => {
   let msg;

   switch (event.message.text.toLowerCase().trim()) {
      case "image":
         msg = sendImage();
         break;
      case "imagemap":
         msg = sendImageMap();
         break;
      case "รายงาน":
         msg = await sendFlexCovidInfo();
         break;
      case "ห้องพัก":
         msg = await sendFlexPromotion();
         break;
      default:
         msg = sendText(event);
   }

   

   return config.client.replyMessage(event.replyToken, msg);
};
