'use strict';

// Replacing these now with express


var http = require('http');
var express = require('express');
var app = express();



app.get('/', function (req, res) {
    res.send('<html><h1>Hello World</h1></html>');
});

app.get('/api/defaultPerson', function (req, res) {

    var staticPersonInfo = require('./modules/personInfo.js');
    res.set("Content-Type", "application/json");
     res.send(staticPersonInfo.person);
    
});

var server = http.createServer(app);
server.listen(1337, function () {
    console.log("Express is running on port 1337");
});

/*

// These were from the earlier part of the blog.
// Hiding...

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Require: Method
    var simpleMath = require('./modules/numberSquared.js');
    console.log('Test >> The square of 5 is ' + simpleMath(5).squared());

    // Require: Field
    var staticPersonInfo = require('./modules/personInfo.js');
    console.log('Test >> Default Person is ' + JSON.stringify(staticPersonInfo.person));

    // Return
    res.end(JSON.stringify(staticPersonInfo.person));

}).listen(port);
*/