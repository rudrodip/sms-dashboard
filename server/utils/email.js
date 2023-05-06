const Sib = require('sib-api-v3-sdk')
require('dotenv').config()

const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()
const sender = {
	email: 'official.rudrodipsarker@gmail.com',
	name: 'Rajshahi College',
}

const send_email = async (subject, text, html = '', receivers) => {
  let receiverObjects = receivers.map(email => ({ email }));
  try {
    await tranEmailApi.sendTransacEmail({
      sender,
      to: receiverObjects,
      subject: subject,
      textContent: text,
    });
    console.log('Email sent successfully');
  } catch (err) {
    console.error('Error sending email');
    throw err;
  }
};

module.exports = { send_email }