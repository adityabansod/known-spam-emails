'use strict';

var fs = require('fs');
var path = require('path');

var pathToLists = path.join(__dirname, 'spam_lists');
var lists = [];

loadLists();

function loadLists() {
	fs.readdir(pathToLists, function(err, files) {
		if(err) {
			throw new Error('could not find spam_lists directory');
		}

		files.forEach(function(file) {
			readFile(pathToLists + file);
		});
	});
}

function readFile(file) {
	fs.readFile(file, 'utf8', function(err, data) {
		if(err) {
			throw new Error('could not open ' + file);
		}

		var emails = data.split('\n');
		emails.forEach(function(email) {
			switch (email.charAt(0)) {
				case '#':
				case '!':
				case '\n':
					break;
				default:
					lists.push(email);
					break;
			}
		});
	});
}

module.exports = {
	isEmailClean: function(email) {
		return (lists.indexOf(email) === -1);
	}
};
