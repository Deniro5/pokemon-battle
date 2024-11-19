const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Invalid / no token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) res.status(401).json({ message: "Invalid / no token" });

    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error",
    });
  }

  //get userId from the token

  //pass userId to the req
};

module.exports = { verifyToken };
