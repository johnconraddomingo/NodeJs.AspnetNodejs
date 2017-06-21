'use strict';
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
