const { client } = require("../config/line");

exports.handlePostback = (event) => {
   let postbackData = event.postback.data;

   let data = JSON.parse(postbackData);

   let msg;
   if (data.type === "roompromotion") {
      // console.log(data.name);
      msg = [
         { type: "text", text: "สนใจรายละเอียดใช่ไหมครับ" },
         { type: "text", text: "ราคาที่พบ" + data.price },
      ];
   }

   //ลองใช้ push message / broadcast

   // console.log("User ID" + event.source.userId);
   // let msg2 = { type: "text", text: "textนี้มาจาก push message" };

   // return client.pushMessage(event.source.userId, msg2);
   // return client.broadcast( msg2);

   //   return client.replyMessage(event.replyToken, msg);
};
