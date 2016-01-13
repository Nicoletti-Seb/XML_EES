var exec = require('child_process').exec;


exports.createPDF = function(){
 exec('java -jar fop.jar -xml ../test/persons.xml -xsl ../test/hello.xsl -pdf ../../hello.pdf',{cwd:"./fop/build/"},
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
 });
}