'use strict';

var code = [];
var konamiCode = '38,38,40,40,37,39,37,39,65,66,13';

$(document).keyup(function (event) {
	code.push(event.keyCode);
	console.log(code.join(','));
	console.log(konamiCode);
	if (code.join(',') == konamiCode) {
		window.location = '/html/contra_lvl1.html';
	};		
});

