const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");
const tokenVerification = require("../middleware/token.verification");

authRouter.post("/auth/login", tokenVerification, authController.checkAuth);

module.exports = authRouter;
