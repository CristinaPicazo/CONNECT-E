const { pool } = require("../database/keys");

const signup = (req, res) => {
  try {
    const { u_user, u_email, u_password } = req.body;
    pool.query(
      "INSERT INTO users (u_user, u_email, u_password) VALUES ($1, $2, $3)",
      [u_user, u_email, u_password],
      (err, res) => {
        if (err) throw err;
        console.log(res);
      }
    );
    res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
    });
  }
};

const login = (req, res) => {
  try {
    const { u_email, u_password } = req.body;
    pool.query(
      "SELECT * FROM users WHERE u_email = $1 AND u_password = $2",
      [u_email, u_password],
      (err, res) => {
        console.log('res:', res)
        if (err) throw err;
        console.log("res");
      }
    );
    res.status(200).json({
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in user",
    });
  }
};

// const login = async (req, res) => {
//   try {
//     const { u_email, u_password } = req.body;
//     const userLogin = await pool.query(
//       "SELECT * FROM users WHERE u_email=$1 AND u_password=$2",
//       [u_email, u_password]
//     ).rows;
//     res.status(200).json({
//       message: "User logged in successfully",
//       user: userLogin[0],
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error logging in user",
//     });
//   }
// };

module.exports = { signup, login };
