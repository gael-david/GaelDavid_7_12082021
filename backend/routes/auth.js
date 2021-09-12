const express = require("express");
const router = express.Router();

// Import middlewares
const checkAuth = require("../middlewares/auth");

// Import controllers
const authControllers = require("../controllers/auth");

router.post("/register", authControllers.registerUser);

router.post("/login", authControllers.loginUser);

router.delete("/delete", authControllers.deleteUser);

module.exports = router;
