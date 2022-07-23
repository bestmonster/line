const commaNumber = require("comma-number");

const axios = require("axios").default;

exports.sendFlexCovidInfo = async () => {
  const response = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all",
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  // console.log(response.data);

  let msg = {
    type: "flex",
    altText: "this is a flex message",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://codingthailand.com/covid_cover.png",
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
            text: "Government Report",
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
                    text: "รายงานอัพเดท",
                    color: "#333333",
                    size: "sm",
                    weight: "bold",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: response.data[0].txn_date,
                    wrap: true,
                    color: "#f36c36",
                    size: "sm",
                    flex: 1,
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "ผู้ป่วยรายใหม่",
                    color: "#333333",
                    size: "sm",
                    weight: "bold",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: commaNumber(response.data[0].new_case) + "ราย",
                    wrap: true,
                    color: "#f36c36",
                    size: "sm",
                    flex: 5,
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "ผู้เสียชีวิต",
                    color: "#333333",
                    size: "sm",
                    weight: "bold",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: commaNumber(response.data[0].new_death) + "ราย",
                    wrap: true,
                    color: "#f36c36",
                    size: "sm",
                    flex: 5,
                    align: "end",
                    action: {
                      type: "uri",
                      uri: "https://www.google.com",
                    },
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
              type: "uri",
              label: "ดูรายละเอียด",
              uri: "https://ddc.moph.go.th/covid19-dashboard/",
            },
            color: "#3ebebd",
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
    },
  };

  return msg;
};
