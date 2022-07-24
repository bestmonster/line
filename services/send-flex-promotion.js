const commaNumber = require("comma-number");
const axios = require("axios").default;

exports.sendFlexPromotion = async () => {
  const response = await axios.get(process.env.BASE_URL + "/getpromotion", {
    headers: { "Content-Type": "application/json" },
  });

  // console.log(response.data);
  let bubbles = [];
  let promotion = response.data;

  bubbles = promotion.map((item) => {
    let postbackType = { type: "roompromotion" };
    let newItem = { ...postbackType, ...item };

    return {
      type: "bubble",
      hero: {
        type: "image",
        url: item.picture,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: "http://linecorp.com/",
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `Deluxe ${item.name}`,
            weight: "bold",
            size: "xl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "โปรโมชั่นพิเศษ",
                    color: "#333333",
                    size: "sm",
                    weight: "bold",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: `หมายเลข ${item.id}`,
                    wrap: true,
                    color: "#f36c36",
                    size: "sm",
                    flex: 1,
                    align: "end",
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "button",
            style: "primary",
            height: "sm",
            action: {
              type: "postback",
              label: "รายละเอียดราคา",
              data: JSON.stringify(newItem),
            },
            color: "#ff6900",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [],
            margin: "sm",
          },
        ],
        flex: 0,
      },
    };
  });

  let msg = {
    type: "flex",
    altText: "โปรโมชั่นห้องพักผู้ป่วย",
    contents: {
      type: "carousel",
      contents: bubbles,
    },
  };

  return msg;
};
