const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SQL_DB;

module.exports = (req, res, next) => {
  try {
    console.log("test");
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, jwtSecret);
    console.log("decodedToken:", decodedToken);

    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
