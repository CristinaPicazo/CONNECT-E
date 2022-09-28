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
    const { fileName } = file;
    file = makeImageUrl(req, fileName);
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

const profile = (req, res, err) => {
  // const { id, user, email } = req;
  // res.status(200).json({
  //   message: "Profile",
  //   id,
  //   user,
  //   email,
  // });
  // const id = req.params.id;
  const id = req.path.split("/").slice(-1)[0];
  console.log("id:", id);

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

//   client
//     // .query("SELECT * FROM users WHERE u_id=$1", 24)
//     .query("SELECT * FROM users WHERE u_id=$1", [id])
//     .then((queryResult) => {
//       // console.log("u_id:", u_id);
//       res.status(200).json({
//         message: "User profile",
//         u_id: queryResult.rows[0].u_id,
//         u_user: queryResult.rows[0].u_user,
//         u_email: queryResult.rows[0].u_email,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: "Error showing profile",
//         err,
//       });
//     });
// };

function makeImageUrl(req, fileName) {
  return req.protocol + "://" + req.get("host") + "/images/" + fileName;
}

module.exports = { getPosts, getSPostById, newPost, profile };
