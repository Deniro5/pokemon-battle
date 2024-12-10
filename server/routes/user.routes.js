const { handleUpdate, handleGet } = require("../controllers/user.controller");

const express = require("express");
const router = express.Router();

router.get("/:id", handleGet);
router.put("/update/:id", handleUpdate);

module.exports = router;
