const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

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

// NB:// to use the api
// fetch("http://localhost:3000/posts/").then(result => {return result.json();}).then(data=>{console.log(data)})
