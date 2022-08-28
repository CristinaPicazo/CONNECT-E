const { client } = require("../database/keys");

//TODO: 404 not found
const getPosts = async (req, res) => {
  try {
    const posts = await (await client.query("SELECT * FROM posts")).rows;
    if (posts.length < 1) {
      res.status(200).json({
        message: "There isn't any post",
      });
    } else {
      res.status(200).json({
        posts,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error showing posts",
      error,
    });
  }
};

const getSPostById = async (req, res) => {
    const p_id = req.params.p_id;
try {
    const post = await (await client.query('SELECT * FROM posts WHERE p_id=$1', [p_id])).rows[0];
    res.status(200).json({post});
} catch (error) {
    res.status(500).json({
        message: 'An error has ocurred',
        error
    })
}
}

//TODO: Error 500
const newPost = async (req, res) => {
  const { p_body, p_file, p_title } = req.body;
  try {
    await client.query(
      "INSERT INTO posts (p_id, p_body, p_file, fk_u_id, p_title) VALUES ($1, $2, $3, $4, $5)",
      [p_id, p_body, p_file, fk_u_id, p_title]
    );
    const post = await (
      await client.query("SELECT * FROM posts WHERE p_id = $1", [p_id])
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

  const profile = async (req, res) => {
    const u_id = req.params.u_id;
try {
    const post = await (await client.query('SELECT * FROM posts WHERE u_id=$1', [u_id])).rows[0];
    res.status(200).json({post});
} catch (error) {
    res.status(500).json({
        message: 'An error has ocurred',
        error
    })
}
}

module.exports = { getPosts, getSPostById, newPost, profile };
