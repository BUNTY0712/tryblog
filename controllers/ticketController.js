// controllers/ticketController.js
const User = require("../models/User");
const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const {
      name,
      depart,
      employeeid,
      email,
      tickettype,
      errortype,
      message,
      useramc,
      amcno,
    } = req.body;
    const ticket = new Ticket({
      user_id: userId,
      name,
      depart,
      employeeid,
      email,
      tickettype,
      errortype,
      message,
      useramc,
      amcno,
    });

    await ticket.save();
    res.json({ ticket });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
