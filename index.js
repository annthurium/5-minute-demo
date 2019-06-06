const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// there is no get now, only post, deal with it
app.use((req, res, next) => {
  req.method = 'POST';
  /* thank u, */ next();
});


app.post('/voice', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.join(__dirname , 'voice.xml'));
});

app.post('/sms', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.join(__dirname , 'sms.xml'));
});

http.createServer(app).listen(1337, () => {
  console.log('express server listening on port 1337');
});
