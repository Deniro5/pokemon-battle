const express = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const {
  handleSignup,
  handleLogin,
  handleLogout,
  handleCheckAuth,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", handleSignup);

router.post("/login", handleLogin);
router.post("/logout", handleLogout);

router.get("/check-auth", verifyToken, handleCheckAuth);

module.exports = router;
