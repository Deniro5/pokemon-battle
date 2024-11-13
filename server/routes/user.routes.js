const { handleUpdate } = require("../controllers/user.controller");

const express = require("express");
const router = express.Router();

router.put("/update/:id", handleUpdate);

module.exports = router;
