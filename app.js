const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

app.use(bodyParser.json());

//Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to db
const mongoUri = process.env.DB_CONNECT;

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true },
  console.log("Connected to DB")
);

//How to route up the server
app.listen(3000);
