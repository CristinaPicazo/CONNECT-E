const { client  } = require("../database/keys");

const signup = async (req, res, err) => {
  const { u_user, u_email, u_password } = req.body;
  try {
    client.query(
      "INSERT INTO users (u_user, u_email, u_password) VALUES ($1, $2, $3)",
      [u_user, u_email, u_password]
    );
    if (err) throw err;
    res.status(200).json({
      message: "User created successfully",
      u_user: u_user,
      u_email: u_email,
    });
    //ToDo: This part is not working
  } catch (error) {
    console.log("error:", error);
    if (error.code == "23505") {
      res.status(300).json({
        message: "User already exists",
        error,
      });
    } else {
      res.status(500).json({
        message: "Error creating user",
      });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await (
      await client.query(
        "SELECT * FROM users WHERE u_email = $1 AND u_password = $2",
        [email, password]
      )
    ).rows;
    if (newUser.length > 0) {
      res.status(200).json({
        message: "User logged in successfully",
        id: newUser[0].u_id,
        user: newUser[0].u_user,
        email: newUser[0].u_email,
        password: newUser[0].u_password,
      });
    } else {
      res.status(200).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error logging in user",
    });
  }
};

module.exports = { signup, login };
