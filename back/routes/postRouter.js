const express = require("express");
const postRouter = express.Router();

//Controllers
const { getPosts, getSPostById, newPost, profile } = require("../controllers/postsController");

//Routes
postRouter.get("/", getPosts);
postRouter.get("/:id", getSPostById);
postRouter.post("/newPost", newPost);
postRouter.get("/profile", profile);

module.exports = { postRouter };
