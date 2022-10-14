const jwt = require("jsonwebtoken");
// const app = require("../app");

function checkToken(req, res, next) {
  // Check if token is sent
  const header = req.header("Authorization");
  try {
    if (header === undefined) {
      return console.log("header === undefined");
    }
    if (!header) {
      return res.status(401).send({ message: "You must be logged in" });
    }
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Invalid token" + err });
      }
      req.id = decoded.id;
      req.user = decoded.user;
      req.email = decoded.email;
      next();
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}

module.exports = { checkToken };
