'use strict';

var spamchecker = require('./index.js');

// really lame but we're
// waiting for the filessytem io to finish
setTimeout(function(){
	// known bad
	var bad = spamchecker.isEmailClean('demondon@hotmail.co.uk');

	// known good (unknown)
	var good = spamchecker.isEmailClean('somegoodemail@email.com');

	console.log('results for bad: ' + bad);
	console.log('results for good: ' + good);
}, 5000);
