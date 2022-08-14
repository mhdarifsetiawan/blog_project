const { body } = require("express-validator");

const registrationValidation = [
  body("fullName").isString().isLength({ min: 2, max: 150 }),
  body("email").isEmail(),
  body("password").isStrongPassword(),
];

module.exports = registrationValidation;
