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

app.use("/catchs", catchCookieRouter);

//connect to mongodb

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connect to db?");
});

//listen port
var port = process.env.PORT || 3001;
app.listen(port, () => {
  "server is already done";
});
