"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
	case 'red':
	console.log('Red is the color of an apple.');
	break;
	case 'orange':
	console.log('Orange is the color of a basketball.');
	break;
	case 'yellow':
	console.log('Yellow is the color of the sun.');
	break;
	case 'green':
	console.log('Green is the color of grass.');
	break;
	case 'blue':
	console.log('Blue is the color of the sky.');
	break;
	default:
	console.log('I do not know anything by that color.');
	break;
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

var cameron=180;
	if (cameron>200) {
		console.log('Cameron had a total of $'+ cameron + 'with a discounted total of $' + (cameron-(cameron*.10)));
	} else {
		console.log('Cameron had a total of $'+cameron);
	}
var ryan=250;
	if (ryan>200) {
		console.log('Ryan had a total of $'+ ryan + ' with a discounted total of $' + (ryan-(ryan*.10)));
	} else {
		console.log('Ryan had a total of $'+ryan);
	}
var george=320;
	if (george>200) {
		console.log('George had a total of $'+ george + ' with a discounted total of $' + (george-(george*.10)));
	} else {
		console.log('George had a total of $'+george);
	}

var flipACoin = Math.floor(Math.random()* 2);
	(flipACoin==0)?console.log('Buy a house.'):console.log('Buy a car.');

var luckyNumber = Math.floor(Math.random()* 6);
console.log(luckyNumber);
	switch(luckyNumber) {
		case 0:
		console.log('Your lucky number is ' + luckyNumber + 'you spent $60 and received a discount of 0%. Your new total is $' + (60-(60*0))+'.');
		break;
		case 1:
		console.log('Your lucky number is ' + luckyNumber + 'you spent $60 and received a discount of 10%. Your new total is $' + (60-(60*.10))+'.');
		break;
		case 2:
		console.log('Your lucky number is ' + luckyNumber + 'you spent $60 and received a discount of 25%. Your new total is $' + (60-(60*.25))+'.');
		break;
		case 3:
		console.log('Your lucky number is ' + luckyNumber + 'you spent $60 and received a discount of 30%. Your new total is $' + (60-(60*.30))+'.');
		break;
		case 4:
		console.log('Your lucky number is ' + luckyNumber + 'you spent $60 and received a discount of 40%. Your new total is $' + (60-(60*.40))+'.');
		break;
		case 5:
		console.log('Your lucky number is ' + luckyNumber + 'you spent $60 and received a discount of 100%. Your new total is $' + (60-(60*1))+'.');
		break;
	}

var confirmNumber = confirm('Would you like to enter a number?');
	
	if (confirmNumber) {
		
			var number = prompt('Please enter a number.');
				if (number%2===0) {
					console.log('Your number was even.');
				} else if (isNaN) {
					alert("I'm sorry, that is not a number. Please try again.") 
				} else {
					console.log('Your number was odd.');
				}
	
				if (number<=0) {
					console.log('Your number is negative.');
				} else {
					console.log('Your number is a positive number.');
				}
			var numberPlusOneHundred = parseInt(number)+100;
				console.log(numberPlusOneHundred);
	}



