
const accountSid = process.env.TWILIO_PRIMARY_SID;
const authToken = process.env.TWILIO_PRIMARY_TOKEN

const client = require('twilio')(accountSid, authToken);

const VoiceResponse = require('twilio').twiml.VoiceResponse;


// const response = new VoiceResponse();
// response.play({}, 'https://en.wikipedia.org/wiki/File:Lady_Gaga_-_Telephone.ogg');
//
// console.log(response.toString());
// const number = ''

let numbers;
client.messages.list({ to: '+15104625981', pageSize: 1000})
.then(response => {
  numbers = new Set(response.map(message => message.from))
  console.log('numbers', numbers);
  numbers.forEach(number => client.calls.create({to: number, from: '+15104625981', url: 'http://demo.twilio.com/docs/voice.xml'}))
});
