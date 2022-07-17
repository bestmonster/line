const config = require("../config/line");

exports.sendText = (event) => {
  let msg;

  let msgText = event.message.text.toLowerCase().trim();

  if (msgText === "promotion") {
    msg = { type: "text", text: "ราคาดี 25000 บาท" };
  } else if (msgText === "man u") {
    msg = { type: "text", text: "พิเศษไปเลย 15000 บาท" };
  } else if (msgText === "love")
    msg = {
      type: "sticker",
      packageId: "8515",
      stickerId: "16581243",
    };
  else {
    msg = { type: "text", text: "บัตรหมดแล้วครับ" };
  }

  return msg;
};
