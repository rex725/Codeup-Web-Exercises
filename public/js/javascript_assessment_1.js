'use strict';
//1

function isNegative(number) {
	return number<0;
};

//2

function average(numberArray) {
	var allNumbersAdded = 0;
	var averageOfNumbers = '';
	for (var i = 0; i < numberArray.length; i++) {
		allNumbersAdded = allNumbersAdded + numberArray[i];
	}
	averageOfNumbers = allNumbersAdded/numberArray.length;
	return averageOfNumbers;
};

//3

function countOdds(numberArray) {
	var isOddArray = [];
	for (var i = 0; i < numberArray.length; i++) {
		if ((numberArray[i] % 2) !== 0) {
			isOddArray.push(numberArray[i]);
		}
	};

	return isOddArray.length;
};

//4

function convertNameToObject(name) {
	name = name.split(' ');
	var nameObject = {'firstName': name[0], 'lastName': name[1]};
	return nameObject;
};

//5

function fiveTo (number) {
	var fiveToArray = [];
	for (var i = 5; i < number; i++) {
		fiveToArray.push(i);
	};
	return fiveToArray;
};

//6


function upperCaseLastNames (names) {

	for (var i = 0; i < names.length; i++) {
	var lastNamesArray = names[i].lastName.split('');
	var firstLetterOfLastName = lastNamesArray[0];
	var upperCaseFirstLetterOfLastName = firstLetterOfLastName.toUpperCase();
	lastNamesArray[0] = upperCaseFirstLetterOfLastName;
	var lastNamesString = lastNamesArray.join('');
	names[i].lastName = names[i].lastName.replace(names[i].lastName, lastNamesString);
	};
	return names;
};
