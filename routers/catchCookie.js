const { json } = require("body-parser");
const express = require("express");

const router = express.Router();

const Catch = require("../models/CatchCookie");

router.get("/", async (req, res) => {
  console.log("catch get");
  const catchs = await Catch.find();
  console.log(catchs);
  res.json(catchs);
});

router.post("/", async (req, res) => {
  console.log("catch");
  console.log(req.body);

  var { content } = req.body;
  const hello = new Catch({
    content,
  });
  try {
    const saveCatch = await hello.save();
    res.json(saveCatch);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
