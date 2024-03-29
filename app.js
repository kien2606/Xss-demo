const express = require("express");
const mongoose = require("mongoose");
const mongoose2 = require("mongoose");
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

//connect to mongodb

// mongoose.connect(
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
//   { useNewUrlParser: true },
//   { useUnifiedTopology: true },
//   () => {
//     console.log("connect to db?");
//   }
// );

const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://admin:Admin123@cluster0.qdrmy.mongodb.net/xss?authSource=admin&replicaSet=atlas-oopkjo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Server connected to MongoDb!");
  } catch (err) {
    console.error(err);
  }
};
const port = process.env.PORT || 3001;
app.listen(port, () => {
  "server is already done";
});
start();
app.use("/", catchCookieRouter);

// mongoose.connect(
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function (err, res) {
//     try {
//       console.log("Connected to Database");
//     } catch (err) {
//       throw err;
//     }
//   }
// );

// //listen port
