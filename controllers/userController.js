// controllers/userController.js
const User = require("../models/User");
const Ticket = require("../models/Ticket");

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch user details and explicitly populate tickets
    const user = await User.findById(userId).populate("tickets");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      employeeid,
      division,
      design,
      phoneno,
      deskno,
      newpassword,
      confirmpassword,
    } = req.body;
    const user = new User({
      name,
      email,
      employeeid,
      division,
      design,
      phoneno,
      deskno,
      newpassword,
      confirmpassword,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
