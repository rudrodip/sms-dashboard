const express = require('express');
const authController = require('../controllers/authController');
const { validateSignupRequest, isRequestValidated } = require('../validators/authValidator');
const router = express.Router();

router.post('/register', validateSignupRequest, isRequestValidated, authController.signup);

module.exports = router;