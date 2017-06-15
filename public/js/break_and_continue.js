'use strict';

var userInput; 

// while ((userInput % 2 === 0) || isNaN(parseInt(userInput))) {
// 	var userInput = prompt('Please enter an odd number between 1 and 50.');
// 		if (userInput % 2 !== 0) {
// 			break;
// 		}

// }

// while (true) {
// 	var userInput = prompt('Please enter an odd number between 1 and 50.');
// 	if (userInput % 2 !== 0 && !isNan(parseInt(userInput))) {
// 		console.log("Break fired");
// 		break;
// 	}
// }

while (true) {
    var userInput = prompt('Please enter an odd number between 1 and 50.');
    if (userInput % 2 !== 0 && !isNaN(parseInt(userInput))) {
        break;
    }
}

for (var i = 1; i<50; i++) {
	if (i == userInput) {
			console.log('We are skipping: ' + userInput);
			continue;
		}
	console.log('Here is an odd number: ' + i);
		
}
