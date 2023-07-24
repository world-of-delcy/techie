const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const validateMongoDbId = require("../utils/validateMongodbId");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.refreshToken || "";
  if (!token) {
    return res.status(401).json({ error: "You must be logged in." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    validateMongoDbId(decoded.id);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "You must be logged in." });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "You must be logged in." });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({ error: "You must be admin." });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };
