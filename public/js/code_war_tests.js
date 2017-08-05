// String.prototype.toJadenCase = 
function jadenSmithCase (str) {
	var jadenSmithCaseRefactor = "";
	strArray = str.split(' ');
	strArray.forEach(function(element, index, array) {
		var elementArray = [];
		var elementString = "";
		var firstLetter = "";
		elementArray = element.split('');
		firstLetter = elementArray[0].toUpperCase();
		elementString += firstLetter;
		for(var i = 1; i < elementArray.length; i++) {
			elementString += element[i];
		}
		jadenSmithCaseRefactor += elementString + " ";

	});
	return jadenSmithCaseRefactor.trim();
};


