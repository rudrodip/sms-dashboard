const { check, validationResult } = require('express-validator');

exports.validateSmsRequest = [
  check('phones')
    .isArray()
    .withMessage('Phone number array is required'),
  check('text')
    .isLength({ min: 6 })
    .withMessage('Text must be at least 6 characters long')
];

exports.validateEmailRequest = [
  check('subject')
    .isLength({ min: 6 })
    .withMessage('Subject is required'),
  check('text')
    .isLength({ min: 6 })
    .withMessage('Text must be at least 6 characters long'),
  check('html'),
  check('receivers')
    .isArray()
    .withMessage('Receivers array is required'),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  next();
};