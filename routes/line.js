const express = require("express");
const router = express.Router();
const config = require("../config/line");
const services = require("../services/handle-event");

/* GET users listing. */

//http://localhost:4000/line/callback
router.post(
  "/callback",
  config.line.middleware(config.lineConfig),
   function (req, res, next) {
      Promise.all(req.body.events.map(services.handleEvent))
         .then((result) => res.json(result))
         .catch((err) => {
         console.error(err);
         res.status(500).end();
         });
   }
);



module.exports = router;
