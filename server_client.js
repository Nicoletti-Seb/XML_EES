var express = require('express');
var app = express();
 
app.use(express.static(__dirname + '/bower_components'));
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);