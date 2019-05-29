
const accountSid = process.env.TWILIO_PRIMARY_SID;
const authToken = process.env.TWILIO_PRIMARY_TOKEN

const client = require('twilio')(accountSid, authToken);

client.messages.list({ to: '+15104625981', pageSize: 1000})
.then(response => {
  let numbers = new Set(response.map(message => message.from))
  console.log('numbers', numbers)
});
