'use strict';

var i = 1

while (i<65536) {
	console.log(i*=2);
}

 var allCones = Math.floor(Math.random() * 50) + 50;
 console.log('You need to sell '+ allCones + ' cones.');

 var soldCones = 0

 do {
 	var cones = Math.floor(Math.random() * 5) + 1;
 	console.log(soldCones+=cones);
 		
 } while (soldCones < allCones) 
 if (soldCones>allCones) {
 			console.log('I do not have ' + cones + ', but I do have ' + (soldCones-allCones) +'.');
 		} else if (soldCones=allCones) {
 			console.log("Yay! That's all the cones!")
 		}