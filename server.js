var express = require('express');
var app = express();
var config = require('./config');
var Router = express.Router();
var routers = require('./router');

var port = process.env.PORT || 8181;
app = config(app);
routers.initialize(app, Router);

app.listen(port);
console.log("Server running in port "+ port);

