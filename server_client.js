var express = require('express');
var favicon = require('serve-favicon');
var database = require('./server_bd');
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
 
//Service database
// retourne la position géographique des etablissements
app.post('/getEtabsPositions/', function(req, res){
	database.getEtablissementPositions( function(result){
		res.end(result);
	});
});

// retourne la liste de nom des types d'etablissement
app.post('/getTypes/', function(req, res){
	database.getTypes( function(result){
		res.end(result);
	});
});

// retourne la liste de nom des tutelles d'etablissement
app.post('/getTutelles/', function(req, res){
	database.getTutelles( function(result){
		res.end(result);
	});
});

// retourne la liste de nom des statuts d'etablissement
app.post('/getStatuts/', function(req, res){
	database.getStatuts( function(result){
		res.end(result);
	});
});

app.listen(3000);