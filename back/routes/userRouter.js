const express = require("express");
const userRouter = express.Router();

//Controllers
const { signup, login, profile } = require("../controllers/usersController");

//Routes
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/profile", profile);


module.exports = { userRouter };
