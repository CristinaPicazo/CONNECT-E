const express = require("express");
const postRouter = express.Router();

//Controllers
const {
  getPosts,
  getSPostById,
  newPost,
} = require("../controllers/postsController");

//Routes
postRouter.post("/", getPosts);
postRouter.post("/:id", getSPostById);
postRouter.put("/newPost", newPost);

module.exports = { postRouter };
