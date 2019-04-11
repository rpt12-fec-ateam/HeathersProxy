const express = require('express');
const http = require('http');
const path = require('path');

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();


const app = express();
app.use(express.static(path.join(__dirname + '/public')));

app.get('/test', function (req, res) {
  // res.status(200).send('Success the server is working I think :-)');
});

app.listen(6000, function() {
  console.log('Server listening on port 6000');
});