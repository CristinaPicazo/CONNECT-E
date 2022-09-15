const express = require("express");
const postRouter = express.Router();

// Middlewares
const { checkToken } = require("../middleware/checkToken");
const { upload } = require("../middleware/multer");

// Controllers
const {
  getPosts,
  getSPostById,
  newPost,
} = require("../controllers/postsController");

// postRouter.use(checkToken);

// Routes
postRouter.get("/", getPosts);
postRouter.get("/:id", upload.single("image"), getSPostById);
postRouter.post("/newPost", upload.single("image"), newPost);

module.exports = { postRouter };
