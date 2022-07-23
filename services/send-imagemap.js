exports.sendImageMap = () => {
  let msg = {
    "type": "imagemap",
    "baseUrl": process.env.BASE_URL + "/images/static/imagemap",
    "altText": "เลือกเมนูของเรา",
    "baseSize": {
      "width": 1040,
      "height": 1040
    },
    "video": {
      "originalContentUrl": process.env.BASE_URL + "/images/static/imagemap/video.mp4",
      "previewImageUrl": process.env.BASE_URL + "/images/static/imagemap/preview.jpg",
      "area": {
        "x": 0,
        "y": 0,
        "width": 1040,
        "height": 522
      },
      "externalLink": {
        "linkUri": "https://sanook.com",
        "label": "กูวีดีโอทั้งหมด"
      }
    },
    "actions": [
      {
        "type": "uri",
        "linkUri": "https://mrkumka.com/",
        "area": {
          "x": 0,
          "y": 521,
          "width": 520,
          "height": 520
        }
      },
      {
        "type": "message",
        "text": "Yes Cool!!",
        "area": {
          "x": 521,
          "y": 521,
          "width": 520,
          "height": 520
        }
      }
    ]
  }

  return msg;
};
