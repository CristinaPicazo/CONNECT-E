const { client } = require("../database/keys");
const FormData = require("form-data");
const fs = require("fs");

const getPosts = (req, res) => {
  client
    .query(
      "SELECT p_id,p_title,p_body, CASE WHEN readby.fk_u_id=$1 OR posts.fk_u_id=$1 THEN 1 ELSE 0 END AS isRead FROM posts LEFT JOIN readby ON readby.fk_p_id = posts.p_id",
      [req.id]
    )
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

const isRead = (req, res, err) => {
  let { fk_user_id, fk_post_id } = req.body;
  client
    .query("INSERT INTO readby (fk_u_id, fk_p_id) VALUES ($1, $2)", [
      fk_user_id,
      fk_post_id,
    ])
    .catch((err) => {
      console.log("err:", err);
      res.status(500).json({
        message: "Error reading the post",
        err,
      });
    });
};

const getSPostById = (req, res) => {
  const id = req.params.id;
  client
    .query(
      "SELECT posts.*, users.u_user as author FROM posts INNER JOIN users ON p_id=$1 and users.u_id = posts.fk_u_id",
      [id]
    )
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

function makeImageUrl(req, fileName) {
  return req.protocol + "://" + req.get("host") + "/images/" + fileName;
}

const newPost = (req, res, err) => {
  let { title, body, userId } = req.body;
  let { file } = req;
  if (file) {
    const { fileName } = file;
    file = makeImageUrl(req, file.fileName);
  }
  client
    .query(
      "INSERT INTO posts (p_title, p_body, p_file, fk_u_id) VALUES ($1, $2, $3, $4)",
      [title, body, file, userId]
      // "INSERT INTO readby ('fk_u_id','fk_p_id') values ($1, $2)",[userId,postId],
    )
    .then((queryResult) => {
      res.status(200).json({
        message: "Post created successfully",
        queryResult,
      });
    })
    .catch((err) => {
      console.log("err:", err);
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

const profile = (req, res, err) => {
  const id = req.path.split("/").slice(-1)[0];

  client
    .query("DELETE FROM users WHERE u_id=$1", [id])
    .then((queryResult) =>
      res.status(200).json({
        message: "Post deleted successfully",
        queryResult,
      })
    )
    .catch((err) => {
      console.log("err:", err);
      res.status(500).json({
        message: "Error deleting the user",
        err,
      });
    });
};

module.exports = { getPosts, isRead, getSPostById, newPost, profile };
