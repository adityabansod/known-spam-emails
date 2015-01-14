known-spam-emails
=================

Tiny little library to check email addresses against known "bad" email lists.

## Installation

  npm install known-spam-emails --save

## Usage

  var spamchecker = require('known-spam-emails')

  // known bad
  var bad = spamchecker.isEmailClean('demondon@hotmail.co.uk');

  // known good (unknown)
  var good = spamchecker.isEmailClean('somegoodemail@email.com');


## Tests

  npm test

## Contributing

Fork and issue a pull request. Feel free to add new files of known bad email addresses or spam lists in to the `spam_lists` folder. One new email address per line. 

## Release History

* 0.1.0 Initial release