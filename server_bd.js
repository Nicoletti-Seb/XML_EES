var basex = require('basex');
// ouvrir une session baseX
var s = new basex.Session();
// ouvrir la table
s.execute('open etablissement_superieur');

// retourne la position géographique d'un etablissement
exports.getEtablissementPositions = function(callBack) {
	s.query("declare option output:method 'json'; <json type='object'>   <etabs type='array'>{   for $x in //etablissement     return <_ type='object'>{           <nom type='string'>{string($x/nom)}</nom> |           <x type='string'>{string($x/longitude_X)}</x> |           <y type='string'>{string($x/latitude_Y)}</y>         }         </_> }   </etabs> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne la liste de nom des types d'etablissement
exports.getTypes = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/type)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne la liste de nom des tutelle d'etablissement
exports.getTutelles = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/tutelle)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne la liste de nom des statut d'etablissement
exports.getStatuts = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/statut)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}