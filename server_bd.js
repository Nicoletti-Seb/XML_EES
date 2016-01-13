var basex = require('basex');
// ouvrir une session baseX
var s = new basex.Session();
// ouvrir la table
s.execute('open etablissement_superieur');

// retourne la position géographique d'un etablissement
exports.getEtablissementPositions = function(callBack) {
	s.query("declare option output:method 'json'; <json type='object'>   <etabs type='array'>{   for $x in //etablissement     return <_ type='object'>{           <nom type='string'>{string($x/nom)}</nom> |           <x type='string'>{string($x/longitude_X)}</x> |           <y type='string'>{string($x/latitude_Y)}</y>    | <adresse type='string'>{string($x/adresse)}</adresse> | <lien type='string'>{string($x/lien)}</lien>    }         </_> }   </etabs> </json>").execute(function (err, result) {
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

// retourne la liste de nom des tutelles d'etablissement
exports.getTutelles = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/tutelle)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne la liste de nom des statuts d'etablissement
exports.getStatuts = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/statut)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne la liste de nom des academies
exports.getAcademies = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/academie)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne la liste de nom des academies
exports.getUniversites = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>   <types type='array'>{   for $x in distinct-values(//etablissement/universite)  return <_ type='object'>{ <nom type='string'>{string($x)}</nom>}</_>}</types> </json>").execute(function (err, result) {
	    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne le nombre d'etablissement par région
exports.getNbEtabParRegion = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'> <nbTotal type='string'>{count(//etablissement/region)}</nbTotal> <regions type='array'>{    for $e in //etablissement    let $r := $e/region    group by $r    return       <_ type='object'>        <nom type='string'>  {string($r)} </nom>        <nombre type='string'> {count($e)} </nombre>      </_>  }  </regions></json>").execute(function (err, result) {
			    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne le nombre d'etablissement par statut
exports.getNbEtabParStatut = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'> <nbTotal type='string'>{count(//etablissement/statut)}</nbTotal> <statuts type='array'>{    for $e in //etablissement    let $r := $e/statut    group by $r    return       <_ type='object'>        <nom type='string'>  {string($r)} </nom>        <nombre type='string'> {count($e)} </nombre>      </_>  }  </statuts></json>").execute(function (err, result) {
			    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne le nombre d'etablissement par type
exports.getNbEtabParType = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'> <nbTotal type='string'>{count(//etablissement/type)}</nbTotal> <types type='array'>{    for $e in //etablissement    let $r := $e/type    group by $r    return       <_ type='object'>        <nom type='string'>  {string($r)} </nom>        <nombre type='string'> {count($e)} </nombre>      </_>  }  </types></json>").execute(function (err, result) {
			    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne le nombre d'etablissement par tutelle
exports.getNbEtabParTutelle = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'>  <nbTotal type='string'>{count(//etablissement/tutelle)}</nbTotal> <tutelles type='array'>{    for $e in //etablissement    let $r := $e/tutelle    group by $r    return       <_ type='object'>        <nom type='string'>  {string($r)} </nom>        <nombre type='string'> {count($e)} </nombre>      </_>  }  </tutelles></json>").execute(function (err, result) {
			    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}

// retourne le nombre d'etablissement par academie
exports.getNbEtabParAcademie = function(callBack) {
	s.query("declare option output:method 'json';<json type='object'> <nbTotal type='string'>{count(//etablissement/academie)}</nbTotal> <academies type='array'>{    for $e in //etablissement    let $r := $e/academie    group by $r    return       <_ type='object'>        <nom type='string'>  {string($r)} </nom>        <nombre type='string'> {count($e)} </nombre>      </_>  }  </academies></json>").execute(function (err, result) {
				    if (err) {
	    	callBack(err);
	    } else {
	    	callBack(result.result);
	    }
	});
}