const { client } = require("../database/keys");

const signup = (req, res, err) => {
  const { u_user, u_email, u_password } = req.body;
  client
    .query(
      "INSERT INTO users (u_user, u_email, u_password) VALUES ($1, $2, $3)",
      [u_user, u_email, u_password]
    )
    .then((queryResult) =>
      res.status(200).json({
        message: "User created successfully",
        u_user: u_user,
        u_email: u_email,
      })
    )
    .catch((err) => {
      if (err.code == "23505") {
        res.status(200).json({
          message: "User is already registered",
          err,
        });
      } else {
        res.status(500).json({
          message: "Error creating the user",
          err,
        });
      }
    });
};

const login = (req, res, err) => {
  const { email, password } = req.body;
  client
    .query("SELECT * FROM users WHERE u_email = $1 AND u_password = $2", [
      email,
      password,
    ])
    .then((queryResult) => {
      if (queryResult.rowCount > 0) {
        res.status(200).json({
          message: "User logged in successfully",
          id: queryResult.rows[0].u_id,
          user: queryResult.rows[0].u_user,
          email: queryResult.rows[0].u_email,
          password: queryResult.rows[0].u_password,
        });
      } else {
        res.status(200).json({
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error logging in user",
        err,
      });
    });
};

const profile = (req, res) => {
  console.log('hi')
  console.log('req.body:', req.body)
  const { u_id, u_user, u_email } = req.body;
  client
    .query("SELECT * FROM users WHERE u_id=$1", [u_id])
    .then((queryResult) => {
      res.status(200).json({
        message: "User profile",
        u_id: u_id,
        u_user: u_user,
        u_email: u_email,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error showing profile",
        err,
      });
    });
};

module.exports = { signup, login, profile };
