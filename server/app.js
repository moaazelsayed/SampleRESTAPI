var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();
var path = require('path')
var cors = require('cors');
var routes = './routes/routes';
var basicAuth = require('../auth/auth');
var errorHandler = require('../helpers/errorHandler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Custom Middleware
app.use(basicAuth);
app.use(errorHandler);
app.use(routes); 

// Server listen on port 3000
app.listen(port, function(){
	console.log("Server started on port: " + port);
});
