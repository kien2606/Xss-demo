const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv/config");

//import route

const catchCookieRouter = require("./routers/catchCookie");

//middlewares
app.use(cors());
app.use(bodyParser.json());

// routers
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/", catchCookieRouter);

//connect to mongodb

mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
  { useNewUrlParser: true },
  () => {
    console.log("connect to db?");
  }
);

//listen port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  "server is already done";
});
