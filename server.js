const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set angular as the client view:
app.use(express.static(path.join(__dirname, 'client', 'dist')));

//use body parser
app.use(bodyParser.urlencoded({extended: true}));

// Use native promises
mongoose.Promise = global.Promise;

//require the mongoose configuration
require('./server/config/mongoose.js');

//Routes requirement
var route_setter = require('./server/config/routes.js');
route_setter(app);

//Listen on
app.listen(port, function(){
	console.log("listening on port: " ,port);
});