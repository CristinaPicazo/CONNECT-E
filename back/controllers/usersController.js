const { client } = require("../database/keys");

const signup = (req, res, err) => {
  const { u_user, u_email, u_password } = req.body;
  client.connect();
  client
    .query(
      "INSERT INTO users (u_user, u_email, u_password) VALUES ($1, $2, $3)",
      [u_user, u_email, u_password]
    )
    .then((result) =>
      result.status(200).json({
        message: "User created successfully",
        u_user: u_user,
        u_email: u_email,
        result,
      })
    )
    .catch((err) => {
      // console.log("User is already registered"), console.log("err:", err),
      if (err.code == "23505") {
        res.status(200).json({
          message: "User is already registered",
        });
      } else {
        res.status(500).json({
          message: "Error creating the user",
        });
      }
    })
    .then(() => client.end());
};

const login = (req, res, err) => {
  const { email, password } = req.body;
  client.connect();
  client
    .query("SELECT * FROM users WHERE u_email = $1 AND u_password = $2", [
      email,
      password,
    ])
    .then((res) => {
      console.log("result.rowCount > 0:", res.rowCount > 0);
      console.log("res.rows.u_id:", res.rows[0].u_user);
      if (res.rowCount > 0) {
        res.status(200).json({
          message: "User logged in successfully",
          id: res.rows[0].u_id,
          user: res.rows[0].u_user,
          email: res.rows[0].u_email,
          password: res.rows[0].u_password,
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
      });
    })
    .then(() => client.end());
};

module.exports = { signup, login };
