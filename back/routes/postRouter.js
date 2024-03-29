const express = require("express");
const postRouter = express.Router();

// Middlewares
const { checkToken } = require("../middleware/checkToken");
const { upload } = require("../middleware/multer");

// Controllers
const {
  getPosts,
  isRead,
  getSPostById,
  newPost,
  profile,
} = require("../controllers/postsController");

// Check token everytime before access to the routes
postRouter.use(checkToken);

// Routes
postRouter.get("/", getPosts);
postRouter.post("/", isRead);
postRouter.get("/:id", upload.single("file"), getSPostById);
postRouter.post("/newPost", upload.single("file"), newPost);
postRouter.delete("/profile/:id", profile);

module.exports = { postRouter };
