const dotenv = require('dotenv');
dotenv.config();
const https = require('https');

function sms_send(message, numbers) {
    const url = "https://bulksmsbd.net/api/smsapi";
    const api_key = process.env.BULKSMS_API_KEY;
    const senderid = process.env.BULKSMS_SENDER_ID;
    const number = numbers.join(',');

    const data = {
        "api_key": api_key,
        "senderid": senderid,
        "number": number,
        "message": message
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    const req = https.request(url, options, (res) => {
        res.setEncoding('utf8');
        let response = '';
        res.on('data', (chunk) => {
            response += chunk;
        });
        res.on('end', () => {
            console.log(response);
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // send the request
    req.write(JSON.stringify(data));
    req.end();
}

module.exports = { sms_send }