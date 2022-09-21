const { client } = require("../database/keys");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = (req, res, err) => {
  const { user, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log("user, email, password :", user, email, password);

  if (email === "") {
    res.status(400).send("Email is required");
    return;
  }

  if (password === "") {
    res.status(400).send("Password is required");
    return;
  }

  client
    .query(
      "INSERT INTO users (u_user, u_email, u_password) VALUES ($1, $2, $3)",
      [user, email, hashedPassword]
    )
    .then((queryResult) =>
      res.status(200).json({
        message: "User created successfully",
        queryResult,
      })
    )
    .catch((err) => {
      if (err.code == "23505") {
        return res.status(200).json({
          message: "User is already registered",
          err,
        });
      }
      if (err.code == "23502") {
        return res.status(200).json({
          message: "User must be unique, try again",
          err,
        });
      } else {
        return res.status(500).json({
          message: "Error creating the user",
          err,
        });
      }
    });
};

const login = (req, res, err) => {
  const { email, password } = req.body;
  client
    .query("SELECT * FROM users WHERE u_email = $1", [email])
    .then((emailResult) => {
      if (emailResult.rowCount == 0) {
        return res.status(200).json({
          message: "User not found",
        });
      }
      bcrypt.compare(
        password,
        emailResult.rows[0].u_password,
        (err, result) => {
          if (err) {
            return res.status(200).json({
              message: "Password is incorrect",
            });
          }
          if (result) {
            const accessToken = createToken(
              emailResult.rows[0].u_id,
              emailResult.rows[0].u_user,
              emailResult.rows[0].u_email,
              emailResult.rows[0].u_password
            );
            res.status(200).json({
              message: "User logged in successfully",
              // id: emailResult.rows[0].u_id,
              // user: emailResult.rows[0].u_user,
              // email: emailResult.rows[0].u_email,
              accessToken: accessToken,
              userDetails: {
                id: emailResult.rows[0].u_id,
                user: emailResult.rows[0].u_user,
                email: emailResult.rows[0].u_email,
              },
            });
          }
        }
      );
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error logging in",
        err,
      });
    });
};

function createToken(id, user, email) {
  try {
    const jwtPassword = process.env.JWT_PASSWORD;
    return jwt.sign({ id, user, email }, jwtPassword, { expiresIn: "24h" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal error", err });
  }
}

const profile = (req, res) => {
  const { id, user, email } = req.body;
  client
    .query("SELECT * FROM users WHERE u_id=$1", [id])
    .then((queryResult) => {
      res.status(200).json({
        message: "User profile",
        u_id: queryResult.rows[0].u_id,
        u_user: queryResult.rows[0].u_user,
        u_email: queryResult.rows[0].u_email,
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
