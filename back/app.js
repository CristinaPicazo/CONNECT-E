require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");
const history = require("connect-history-api-fallback");
const app = express();
const { userRouter } = require("./routes/userRouter");

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //true for pictures
app.use(fileUpload({ useTempFiles: true }));
app.use(bodyParser.json());
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", userRouter);

// settings
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
