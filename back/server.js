require("dotenv").config();
const express = require("express");
const urlencoded = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// middlewares
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Headers", "GET, POST, PUT, DELETE");
//   next();
// });

// app.use("/images", express.static(path.join(__dirname, "images")));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //true for pictures
app.use(bodyParser.json());
//app.use(history());
app.use("/images", express.static(path.join(__dirname, "images")));
// app.use(express.static(path.join(__dirname, "public")));

module.exports = { app };
