'use strict';

var howManyDiceRolls = prompt('How many dice should I roll?');
var success = 0
var failure = 0

for(var i=1;i<=howManyDiceRolls; i++) {
	var dieOutcome = Math.floor(Math.random()* 10+1);
	console.log(dieOutcome);
	
	if (dieOutcome==10) {
		success += 2;
		console.log('You had a critical success add ' + success);
	} else if (dieOutcome >= 7) {
		success+= 1;
		console.log('You achieved a success add ' + success);
	} else {
		failure += 1
		console.log('You receieved a failure of ' + failure);
	}
}

alert('You had ' + success + ' successes and ' + failure +' failures.')
