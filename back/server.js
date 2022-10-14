require("dotenv").config();
const express = require("express");
const urlencoded = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const compression = require("compression");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //true for pictures
app.use(bodyParser.json());

// compress all responses
app.use(compression());
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = { app };
