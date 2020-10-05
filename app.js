var express = require("express");
const app = express();
const studentRoute = require("./api/route/studentRoute");
// db connect
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shrey:shrey@api1.igg6q.mongodb.net/api1?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (cnt) => {
  console.log("connected");
});
//end

// bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// end

// routes
app.use("/student", studentRoute);
//end

// if no routes match
app.use("/", (req, res) => {
  res.status(400).json({
    error: "Bad Request",
  });
});
//end

module.exports = app;
