const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateTokenAndSetCookie = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // The cookie can only be accessed by the server (not JavaScript)
    secure: process.env.NODE_ENV === "production", // Set to true if using https in production
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiry
  });
};

const handleSignup = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    generateTokenAndSetCookie(res, user._id);

    return res.status(200).json({ message: "User created successfully", user });
  } catch (e) {
    console.log(e);

    if (e.code === 11000 && e.keyPattern && e.keyPattern.username) {
      return res.status(400).json({
        message:
          "Username has already been taken. Please try a different username",
      });
    }

    res.status(500).json({ message: "Server Error" });
  }
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    generateTokenAndSetCookie(res, user._id);

    return res
      .status(200)
      .json({ message: "User logged in successfully", user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server Error" });
  }
};

const handleLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

const handleCheckAuth = async (req, res) => {
  try {
    //userId comes from the validate token function
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User is authenticated", user });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { handleSignup, handleLogin, handleLogout, handleCheckAuth };
