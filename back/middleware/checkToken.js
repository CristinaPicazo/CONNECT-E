const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  try {
    console.log("req:", req);
    // console.log('req:', req)

    // console.log("token:", localStorage.getItem("token"));
    // console.log('localStorage:', localStorage)
    console.log("req.header:", req.header);
    const header = req.header("Authorization");
    console.log("req.header:", req.header);
    console.log("header:", header);
    if (header === undefined) {
      return console.log("header === undefined");
    }
    if (!header) {
      return res.status(401).send({ message: "You must be logged in" });
    }
    const token = header.split(" ")[1];
    console.log("token:", token);
    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Invalid token" + err });
      }
      req.userId = decoded.userId;
      next();
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}

module.exports = { checkToken };
