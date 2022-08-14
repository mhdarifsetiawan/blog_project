const express = require("express");
const userRouter = express.Router();
const tokenVerification = require("../middleware/token.verification");
const registrationValidation = require("../middleware/user.validation");
const validate = require("../middleware/validate");

const userController = require("./user.controller");

/**
 * @swagger
 * /user/registration:
 *  post:
 *    tags:
 *      - user
 *    summary: API registration
 *    description: API for user registration
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullName:
 *                type: string
 *                example: Your Name
 *    responses:
 *      '200':
 *        description: Registration success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                access-token:
 *                  type: string
 *                  example: sec78ewr783wdewhjgf73yrf7832fghsdgfhegf73wtg
 */
userRouter.post(
  "/user/registration",
  registrationValidation,
  validate,
  userController.createUser
);

/**
 * @swagger
 * /user/{userId}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - user
 *    summary: API untuk edit user
 *    parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          scheme:
 *            type: object
 *            properties:
 *              fullName:
 *                type: string
 *                example: Muhammad Arif setiawan
 *    responses:
 *      '200':
 *        description: registration berhasil
 */
userRouter.put("/user/:userId", tokenVerification, userController.editUser);

module.exports = userRouter;
