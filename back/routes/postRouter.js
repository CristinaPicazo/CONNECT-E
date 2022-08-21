const express = require("express");
const postRouter = express.Router();
const { postsController } = require("../controllers/postsController");

//Controllers
const { signup, login } = require("../controllers/postsController");

//Routes
postRouter.post("/posts", posts);
postRouter.post("/posts/:id", postDetails);
postRouter.post("/new", createPost);
postRouter.post("/profile", profile);

module.exports = { postRouter };
