const { client } = require("../database/keys");

//TODO: 404 not found
const getPosts = (req, res) => {
  client
    .query("SELECT * FROM posts")
    .then((queryResult) => {
      if (queryResult.rowCount < 1) {
        res.status(200).json({
          message: "There isn't any post",
        });
      } else {
        res.status(200).json({
          id: queryResult.rows[0].p_id,
          body: queryResult.rows[0].p_body,
          file: queryResult.rows[0].p_file,
          title: queryResult.rows[0].p_title,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error showing posts",
        err,
      });
    });
};

const getSPostById = (req, res) => {
  const id = req.params.id;
  client
    .query("SELECT * FROM posts WHERE p_id=$1", [id])
    .then((queryResult) => {
      res.status(200).json({
        id: queryResult.rows[0].p_id,
        body: queryResult.rows[0].p_body,
        file: queryResult.rows[0].p_file,
        title: queryResult.rows[0].p_title,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error has ocurred",
        err,
      });
    });
};

const newPost = (req, res) => {
  const { p_id, p_body, p_file, fk_u_id, p_title } = req.body;
  console.log(req.body);
  client
    .query(
      "INSERT INTO posts (p_id, p_body, p_file, fk_u_id, p_title) VALUES ($1, $2, $3, $4, $5)",
      [p_id, p_body, p_file, fk_u_id, p_title]
    )
    .then((queryResult) =>
      res.status(200).json({
        message: "Post created successfully",
        p_body: p_body,
        p_file: p_file,
        fk_u_id: fk_u_id,
        p_title: p_title,
      })
    )
    .catch((err) => {
      if (err.code == "23505") {
        res.status(200).json({
          message: "Post already added",
        });
      } else {
        res.status(500).json({
          message: "Error creating the post",
        });
      }
    });
};

module.exports = { getPosts, getSPostById, newPost };
