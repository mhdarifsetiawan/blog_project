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
 *              email:
 *                type: string
 *                example: email@gmail.com
 *              password:
 *                type: string
 *                example: 123qwe!Asd
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
 *    summary: API edit user
 *    description: This can only be done by the logged in user.
 *    parameters:
 *      - name: userId
 *        in: path
 *        required: true
 *        description: userId that need to be updated
 *        schema:
 *          type: integer
 *    requestBody:
 *      description: Update an existent user in the database (only "fullName" and "password" can be update)
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullName:
 *                type: string
 *                example: your full name
 *              password:
 *                type: string
 *                example: 12wdABC/?!
 *    responses:
 *      '200':
 *        description: Modified successfully
 *      '401':
 *        description: You don't have access to this action
 */
userRouter.put("/user/:userId", tokenVerification, userController.editUser);

module.exports = userRouter;
