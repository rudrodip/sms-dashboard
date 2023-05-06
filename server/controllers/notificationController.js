const { sms_send } = require('../utils/sms')
const { send_email } = require('../utils/email')

exports.sendSms = async (req, res) => {
  const { phones, text } = req.body;

  try {
    sms_send(text, phones)

    res.status(201).json({
      message: 'Sent messages',
    });
  } catch (err) {
    console.error(`Error`, err);
    res.status(500).json({
      message: 'Unable to send sms',
      error: err.message,
    });
  }
};

exports.sendEmail = async (req, res) => {
  const { subject, text, html, receivers } = req.body;
  try {
    await send_email(subject, text, html, receivers);
    res.status(201).json({
      message: 'Sent messages',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Unable to send email',
      error: err.message,
    });
  }
};