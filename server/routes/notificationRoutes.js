const express = require('express');
const notificationContrller = require('../controllers/notificationController')
const { validateSmsRequest, validateEmailRequest, isRequestValidated } = require('../validators/notifyValidator');

const router = express.Router();

router.post('/sms', validateSmsRequest, isRequestValidated, notificationContrller.sendSms);

router.post('/email', validateEmailRequest, isRequestValidated, notificationContrller.sendEmail);

module.exports = router;