const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");
const tokenVerification = require("../middleware/token.verification");

/**
 * @swagger
 * /auth/login:
 *  post:
 *      tags:
 *          - user
 *      summary: API login
 *      description: API for login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: youremail@gmail.com
 *                          password:
 *                              type: string
 *                              example: 123456
 *      responses:
 *          '200':
 *              description: Login success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              access-token:
 *                                  type: object
 *                                  example: 1e3d4t34tgrgvewr3445hgerfw4r/.uyj7tht
 *          '400':
 *              description: Invalid email/password
 */
authRouter.post("/auth/login", authController.checkAuth);
// authRouter.post("/auth/login", authController.checkAuth);

module.exports = authRouter;
