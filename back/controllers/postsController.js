const { pool } = require("../database/keys");

//TODO: 404 not found
const getPosts = async (req, res) => {
  const { u_id } = req.body;
  try {
    const posts = await await pool.query("SELECT * FROM posts");
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error showing posts",
      error,
    });
  }
};

// const getSPostById = (req, res) => {
//   try {
//   } catch (error) {
//     res.status(500).json({
//       message: "Error showing the post",
//     });
//   }
// }

//TODO: Error 500
const newPost = async (req, res) => {
  const { p_body, p_file, p_title } = req.body;
  try {
    await pool.query(
      "INSERT INTO posts (p_id, p_body, p_file, fk_u_id, p_title) VALUES ($1, $2, $3, $4, $5)",
      [p_id, p_body, p_file, fk_u_id, p_title]
    );
    const post = await (
      await pool.query("SELECT * FROM posts WHERE p_id = $1", [p_id])
    ).rows[0];
    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the post",
      error,
    });
  }
};

// const profile = (req, res) => {
//   try {
//   } catch (error) {
//     res.status(500).json({
//       message: "Error showing the profile",
//     });
//   }
// }

module.exports = { getPosts, newPost };
