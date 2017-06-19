function madLibs (a, b, c, d, e, f, g, h, i, j, k, l, m) {
	var a = prompt('Please insert a noun.');
	var b = prompt('Please insert an -ing verb.');
	var c = prompt('Please insert a noun.');
	var d = prompt('Please insert a adjective.');
	var e = prompt('Please insert a noun.');
	var f = prompt('Please insert a noun.');
	var g = prompt('Please insert an emotion.');
	var h = prompt('Please insert an action.');
	var i = prompt('Please insert a noun.');
	var j = prompt('Please insert a noun.');
	var k = prompt('Please insert a friend\'s name.');
	var l = prompt('Please insert a friend\'s name.');
	var m = prompt('Please insert a noun.');
	return console.log('One Valentine\'s ' + a + ' I was '  + b + ', when I looked in my ' + c + ' and saw a ' + d + ' ' + e + 
		'! It said, "Will you be my ' + f + '?" I was so ' + g + '! I ' + h + ' to see who it was from, but there was no ' + 
		i + '. So, at ' + j + ', I asked for clues, but ' + k + ' didn\'t know about it. Finally, someone told me that ' + l + 
		' gave me the ' + m + '.');
}

console.log(madLibs());