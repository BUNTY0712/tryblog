// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/againblog");
    console.log(`Connected to MongoDB database`);
  } catch (error) {
    console.error(`MONGO Connect Error ${error}`);
  }
};

// Call the connectDB function to establish the connection
connectDB();

// Import models
require("./models/User");
require("./models/Ticket");

// Express Routes
app.use("/api", apiRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
