var fs   = require('fs');
var path = require('path');
var _    = require('./src/blank');

var files, file, ext, tests, status;

files = fs.readdirSync('tests');
tests = [];

while(files.length) {
	file = files.shift();
	ext  = path.extname(file);

	if (ext !== '.js') continue;

	tests.push(require('./tests/' + file));
}

status = true;

function report (examination, results) {
	var test;
	if (results.fail) status = false;

	console.log(_.pad('', 75, '='));

	while (results.length) {
		test = results.shift();
		if (test.result) {
			console.log(_.columnize(test.message, 70, '.') + '..... +');
		} else {
			console.error(_.columnize(test.message, 70, '.') + '..... FAIL');
		}
	}
	console.log(_.pad('', 75, '='));
	console.log(_.pad(examination.name + ' ', 70, '-') + '----- ' + (results.ok ? 'OK' : 'FAIL'));
	console.log('Tests total: %s, passed %s, not passed %s\n', results.total, results.passed, results.missed);
};

tests.forEach(function(test){
	_.test(test.assert, report.bind(null, test));
});

if (! status) {
	console.error('TEST FAILED!');
}
process.exit(status ? 0 : 1);