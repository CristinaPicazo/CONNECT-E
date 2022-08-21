const { pool } = require("../database/keys");

const posts = (req, res) => {
    try {
      const { u_email, u_password } = req.body;
      pool.query(
        "SELECT * FROM posts",
        (err, res) => {
          if (err) throw err;
        }
      );
    } catch (error) {
      res.status(500).json({
        message: "Error creating user",
      });
    }
  };

module.exports = { posts };
