const { client } = require("../database/keys");

const getPosts = (req, res) => {
  client
    .query("SELECT * FROM posts")
    .then((queryResult) => {
      if (queryResult.rowCount < 1) {
        res.status(200).json({
          message: "There isn't any post",
          queryResult,
        });
      } else {
        res.status(200).json({
          message: "Posts found",
          queryResult,
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
  console.log("by id");
  const id = req.params.id;
  client
    .query("SELECT * FROM posts WHERE p_id=$1", [id])
    .then((queryResult) => {
      res.status(200).json({
        queryResult,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error has ocurred",
        err,
      });
    });
};

const newPost = (req, res, err) => {
  let { body, file, userId, title, user, readBy } = req.body;
  if (file) {
    console.log("file inside newPost:", file);
    console.log("file inside newPost.name:", file.name);
    const { fileName } = file;
    file = makeImageUrl(req, file);
  }
  client
    .query(
      "INSERT INTO posts (p_body, p_file, fk_u_id, p_title, fk_user, p_readby) VALUES ($1, $2, $3, $4, $5, ARRAY[$6])",
      [body, file, userId, title, user, readBy]
    )
    .then((queryResult) =>
      res.status(200).json({
        message: "Post created successfully",
        queryResult,
      })
    )
    .catch((err) => {
      console.log("err:", err);
      // en que se basa....?
      if (err.code == "23505") {
        res.status(200).json({
          message: "Post already added",
          err,
        });
      } else {
        res.status(500).json({
          message: "Error creating the post",
          err,
        });
      }
    });
};

function makeImageUrl(req, fileName) {
  return req.protocol + "://" + req.get("host") + "/images/" + fileName;
}

module.exports = { getPosts, getSPostById, newPost };
