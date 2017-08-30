var express = require("express"),
    bodyParser = require("body-parser"),
    webRoutes = require("./routes/webRoutes.js"),
    apiRoutes = require("./routes/apiRoutes.js");

var app = express();

//parsing setting
app.use(bodyParser.json()); //aplication/json
app.use(bodyParser.urlencoded({ extended: false })); //www-form-urlencoded

//website
app.use('/', webRoutes);
//api
app.use('/api', apiRoutes);

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});


//2nd Port
var http = require('http');
var app2 = require('./app2');
http.createServer(app2.handleRequest).listen(8000);