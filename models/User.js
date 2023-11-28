const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  employeeid: {
    type: Number,
    required: true,
    unique: true,
  },
  division: {
    type: String,
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
  phoneno: {
    type: Number,
    required: true,
  },
  deskno: {
    type: Number,
  },
  newpassword: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  // You may want to add a field to reference tickets associated with this user
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
