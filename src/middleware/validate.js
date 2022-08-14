const { validationResult } = require("express-validator");

const validate = async (req, res, next) => {
  // check apakah ada error dalam request
  const errors = validationResult(req, res);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;
