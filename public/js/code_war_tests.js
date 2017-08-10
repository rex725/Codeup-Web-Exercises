function toCamelCase(str){
	var strDash = "";
	var strUnderscore = "";
	var wordWithUpperCaseFirstLetter = [];
	var strArrayDash = str.split("-");
	var strArrayUnderscore = str.split("_");
	var strArrayDash2 = [];
	var strArrayUnderscore2 = [];
	for(var i = 1; i < strArrayDash.length; i++ ) {
		word = strArrayDash[i].split("");
		letterToUpperCase = word[0].toUpperCase();
		wordWithUpperCaseFirstLetter.push(letterToUpperCase);
		for( var j = 1; j < word.length; j++){
			wordWithUpperCaseFirstLetter.push(word[j]);
		}
		wordWithUpperCaseFirstLetterString = wordWithUpperCaseFirstLetter.join("");
		strArrayDash2.push(wordWithUpperCaseFirstLetterString);
	};
	for(var i = 1; i < strArrayUnderscore.length; i++) {
		word = strArrayUnderscore[i].split("");
		letterToUpperCase = word[0].toUpperCase();
		wordWithUpperCaseFirstLetter.push(letterToUpperCase);
		for( var j = 1; j < word.length; j++){
			wordWithUpperCaseFirstLetter.push(word[j]);
		}
		wordWithUpperCaseFirstLetterString = wordWithUpperCaseFirstLetter.join("");
		strArrayUnderscore2.push(wordWithUpperCaseFirstLetterString);
	}
	strArrayUnderscore2.splice(0, 1, strArrayUnderscore[0]);
	strArrayDash2.splice(0,1,strArrayDash[0]);
	if (strDash < strUnderscore) {
		return strArrayDash2.join("");
	} else {
		return strArrayUnderscore2.join("");
	}
}


