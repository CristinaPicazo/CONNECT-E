const express = require("express");
const postRouter = express.Router();

//Controllers
const { getPosts, newPost } = require("../controllers/postsController");

//Routes
postRouter.post("/posts", getPosts);
// postRouter.post("/posts/:id", getSPostById);
postRouter.post("/newPost", newPost);
// postRouter.post("/profile", profile);

module.exports = { postRouter };
