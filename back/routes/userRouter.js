const express = require("express");
const userRouter = express.Router();
const { authentication } = require("../controllers/auth");

//Controllers
// const { signUp } = require("../controllers/auth");

// userRouter.post("/signup", (req, res) => {
//   console.log(req.body);
//   res.send("Registered");
// });

//Routes
userRouter.post("/signup", authentication.signUp);

module.exports = { userRouter };
