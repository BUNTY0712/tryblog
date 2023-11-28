// routes/apiRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const ticketController = require("../controllers/ticketController");

const router = express.Router();

// User routes
router.get("/user/:userId", userController.getUser);
router.post("/users", userController.createUser);

// Ticket routes
router.post("/user/:userId/tickets", ticketController.createTicket);

module.exports = router;
