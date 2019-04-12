const express = require('express');
const http = require('http');
const path = require('path');

//Creating connection to Proxy
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();


const app = express();
//For Description & Ingredients
app.use(express.static(path.join(__dirname + '/public')));
//For Photos
app.use('/', express.static(__dirname + '/public'));
//For Reviews
app.use('/item/:id', express.static(__dirname + '/public'));

//To Description (Anait)
app.get('/description', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:8080' });
});

//To Photos (Andrew)
app.get('/items', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});
  
app.get('/images', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});
  
app.get('/benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

app.get('/item-benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

//To Ingredients (Heather)
app.get('/test', function (req, res) {
    proxy.web(req, res, { target: 'http://localhost:6001' });
});

//To Reviews (Aarushi)
app.get('/allReviews/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});
  
app.get('/allItems/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.listen(6000, () => {
  console.log('Proxy server listening on port 6000');
});