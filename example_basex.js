/**

	Réf: https://github.com/apb2006/basex-node

*/

var basex = require('basex');
var s = new basex.Session();

s.execute('open etablissement_superieur');

s.query('count(//etablissement/nom)').execute(function (err, result) {
    if (err) throw err;
    console.log('etablissement', result.result);
});

s.execute('xquery count(//etablissement/nom)', function (err, result) {
    if (err) throw err;
    console.log('etablissement', result.result);
})

s.close();



