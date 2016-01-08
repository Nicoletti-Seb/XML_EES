var basex = require('basex');
// ouvrir une session baseX
var s = new basex.Session();
// ouvrir la table
s.execute('open etablissement_superieur');

// retourne la position géographique d'un etablissement
exports.getEtablissementPositions = function(callBack) {
	s.execute('for $x in //etablissement return <etab>{$x/nom}{$x/longitude_X}{$x/latitude_Y}</etab>', function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);	
	    }
	});
}