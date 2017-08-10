var html = '';
var red;
var green;
var blue;
var rgbColor;
function randomNumber() {
	return Math.floor(Math.random() * 256 );
}
function randomColor() {	
	return 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
}
function write(message) {
	document.write(message);
}
for (var i = 0; i < 10; i++) {
	rgbColor = randomColor();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}
write(html);