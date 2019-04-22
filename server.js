const express = require('express');
const bodyParser = require('body-parser');
const httpProxy = require('http-proxy');

//Creating connection to Proxy
const app = express();
const proxy = httpProxy.createProxyServer();

//For Description & Ingredients
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//For Photos
app.use('/', express.static(__dirname + '/public'));
//For Reviews
app.use('/item/:id', express.static(__dirname + '/public'));

// To Description (Anait)
app.all('/description', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8080' });
});

//To Photos (Andrew)
app.all('/items', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});
  
app.all('/images', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});
  
app.all('/benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

app.all('/item-benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

//To Ingredients (Heather)
app.all('/test', function (req, res) {
    proxy.web(req, res, { target: 'http://localhost:6001' });
});

//To Reviews (Aarushi)
app.all('/allReviews/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});
  
app.all('/allItems/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.listen(6050, () => {
  console.log('Proxy server listening on port 6050');
});