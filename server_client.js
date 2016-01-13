var express = require('express');
var favicon = require('serve-favicon');
var database = require('./server_bd');
var creatorPdf = require('./creator_pdf');
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

//service PDF 
//fop/fop.bat -xml fop/test/persons.xml -xsl fop/test/hello.xsl -pdf hello.pdf
creatorPdf.createPDF();


 
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

// retourne la liste de nom des academies
app.post('/getAcademies/', function(req, res){
	database.getAcademies( function(result){
		res.end(result);
	});
});


// retourne la liste de nom des Universites
app.post('/getUniversites/', function(req, res){
	database.getUniversites( function(result){
		res.end(result);
	});
});

// retourne le nombre d'etablissement par région
app.post('/getNbEtabParRegion/', function(req, res){
	database.getNbEtabParRegion( function(result){
		res.end(result);
	});
});

// retourne le nombre d'etablissement par statut
app.post('/getNbEtabParStatut/', function(req, res){
	database.getNbEtabParStatut( function(result){
		res.end(result);
	});
});

// retourne le nombre d'etablissement par type
app.post('/getNbEtabParType/', function(req, res){
	database.getNbEtabParType( function(result){
		res.end(result);
	});
});

// retourne le nombre d'etablissement par tutelle
app.post('/getNbEtabParTutelle/', function(req, res){
	database.getNbEtabParTutelle( function(result){
		res.end(result);
	});
});

// retourne le nombre d'etablissement par academie
app.post('/getNbEtabParAcademie/', function(req, res){
	database.getNbEtabParAcademie( function(result){
		res.end(result);
	});
});

// retourne les stats sous forme XML
app.post('/getStatisticForPdf/', function(req, res){
	database.getStatisticForPdf( function(result){
		res.end(result);
	});
});

// retourne les nom, type, statut, tutelle, universite, academie, region, departement, lien des etablissement
app.post('/getEtabForStat/', function(req, res){
	database.getEtabForStat( function(result){
		res.end(result);
	});
});

app.listen(3000);