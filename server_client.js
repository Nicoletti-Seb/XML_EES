var express = require('express');
var favicon = require('serve-favicon');
var app = express();



//Static files
app.use("/bower_components", express.static(__dirname + '/bower_components'));
app.use("/images", express.static(__dirname + '/app/images'));
app.use("/scripts", express.static(__dirname + '/app/scripts'));
app.use("/styles", express.static(__dirname + '/app/styles'));
app.use(favicon(__dirname + '/app/favicon.ico')); 

//web pages
app.get(['/', 'index.html'], function (req, res) {
  res.sendFile("app/index.html", {root: __dirname });
});

app.get('/views/:name', function (req, res) {
  res.sendFile("app/views/" + req.params.name, {root: __dirname });
});
 
app.listen(3000);