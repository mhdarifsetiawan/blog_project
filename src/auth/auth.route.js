const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");

authRouter.get("/auth", authController.example);
authRouter.post("/auth/login", authController.chekAuth);

module.exports = authRouter;
