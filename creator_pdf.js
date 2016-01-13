var exec = require('child_process').exec;
var fs = require("fs");

var pathFileXml = "fop/fileXml.xml";
var pathFileXsl = "fop/fileXsl.xsl"

exports.createPDF = function(xml, pathFilePdf, callback){
	
	fs.writeFile("FileXml.xml", xml, function(){
		 exec('java -jar fop.jar -xml ../../'+pathFileXml+' -xsl '+ pathFileXsl +' -pdf ../../' + pathFilePdf,{cwd:"./fop/build/"},
		    function (error, stdout, stderr) {
		        console.log('stdout: ' + stdout);
		        console.log('stderr: ' + stderr);
		        if (error !== null) {
		            console.log('exec error: ' + error);
		        }

		        callback();
		 });
	});


}