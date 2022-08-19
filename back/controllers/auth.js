const {pool} = require("../database/keys");
const authentication = {};

authentication.signUp = async (req, res) => {
  const { u_user, u_email, u_password } = req.body;
  try {
    await pool
      .query(
        "INSERT INTO users(u_user, u_email, u_passowrd) VALUES($1, $2, $3)",
        [u_user, u_email, u_password],
        (error, results) => {
          console.log("results:", results);
          console.log("error:", error);
        }
      )
      .then(
        res.json({
          message: "User created successfully",
        })
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating user",
    });
  }
  
};
module.exports = {authentication};
