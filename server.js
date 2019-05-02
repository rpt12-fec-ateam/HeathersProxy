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
app.all('/test', (req, res) => {
  proxy.web(req, res, { target: 'http://18.191.206.21:8080/' });
});

//To Photos (Andrew)
app.all('/items', (req, res) => {
  proxy.web(req, res, { target: 'http://54.183.191.223:2000/' });
});
  
app.all('/images', (req, res) => {
  proxy.web(req, res, { target: 'http://54.183.191.223:2000/' });
});
  
app.all('/benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://54.183.191.223:2000/' });
});

app.all('/item-benefits', (req, res) => {
  proxy.web(req, res, { target: 'http://54.183.191.223:2000/' });
});

//To Ingredients (Heather)
app.all('/ingredients', function (req, res) {
    proxy.web(req, res, { target: 'http://3.17.5.131:6001/' });
});

//To Reviews (Aarushi)
app.all('/allReviews/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://3.17.9.104:9000/' });
});
  
app.all('/allItems/item/:id', function(req, res) {
  proxy.web(req, res, { target: 'http://3.17.9.104:9000/' });
});

app.listen(6050, () => {
  console.log('Proxy server listening on port 6050');
});