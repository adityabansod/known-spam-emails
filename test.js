'use strict';

var spamchecker = require('./index.js');

// really lame but we're
// waiting for the filessytem io to finish
setTimeout(function(){
  // known bad
  var bad = spamchecker.isEmailClean('demondon@hotmail.co.uk');
  var bad2 = spamchecker.isEmailClean('masoud_kamal@hotmail.com');
  var bad3 = spamchecker.isEmailClean(' masoud_kamal@hotmail.com  ');

  // known good (unknown)
  var good = spamchecker.isEmailClean('somegoodemail@email.com');

  console.log('results for bad: ' + bad);
  console.log('results for bad: ' + bad2);
  console.log('results for bad: ' + bad3);
  console.log('results for good: ' + good);

}, 5000);
