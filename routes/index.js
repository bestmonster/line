const express = require("express");
const router = express.Router();
const db = require("../config/mysql");

// localhost:4000/getpromotion
router.get("/getpromotion", async function (req, res, next) {
  const conn = await db.connectMysql();
  const [rows] = await conn.query("select * from pro_room order by id desc limit 12");
  return res.status(200).json(rows);
});

//localhost:4000/getpromotion/2
router.get("/getpromotion/:id", async function (req, res, next) {
  const conn = await db.connectMysql();
  const [rows] = await conn.query("select * from pro_room where id=?", [req.params.id]);
  return res.status(200).json(rows[0]);
});

module.exports = router;
