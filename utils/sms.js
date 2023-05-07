export async function sms_send(message, numbers) {
  const url = "https://bulksmsbd.net/api/smsapi";
  const api_key = "ER6sZ5W01uWifoIfiOAj";
  const senderid = "8809617611024";
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
    },
    body: JSON.stringify(data)
  };

  try {
    const res = await fetch(url, options);
    const response = await res.text();
    console.log(response);
  } catch (e) {
    console.error(`problem with request: ${e.message}`);
  }
}
