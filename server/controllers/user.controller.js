const User = require("../models/user.model");

const handleUpdate = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { handleUpdate };
