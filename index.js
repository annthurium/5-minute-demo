const http = require('http');
const express = require('express');

const app = express();

http.createServer(app).listen(1337, () => {
  console.log('express server listening on port 1337');
});
