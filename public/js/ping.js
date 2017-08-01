$(document).ready(function(){

function randomNumberForLeftPosition() {
	return Math.random() * (800-448) + 448;
}
function randomNumberForBottomPosition() {
	return Math.random() * (50-300) + 300;
}
var randomPositionLeft = Math.floor(randomNumberForLeftPosition()) + 'px';
var randomPositionBottom = Math.floor(randomNumberForBottomPosition()) + 'px';
	$('#pingpong_ball').css({
		'position' : 'fixed',
		'left' : randomPositionLeft,
		'bottom' : randomPositionBottom
	})
console.log(randomPositionBottom);
// Math.random() * (max-min) + min
// Math.random() * (300-50) + 300
});