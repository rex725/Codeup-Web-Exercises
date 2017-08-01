$(document).ready(function(){

function randomNumberForLeftPosition() {
	return Math.random() * (800-448) + 448;
}
function randomNumberForTopPosition() {
	return Math.random() * (75-330) + 330;
}
var randomPositionLeft = Math.floor(randomNumberForLeftPosition()) + 'px';
var randomPositionTop = Math.floor(randomNumberForTopPosition()) + 'px';
	$('#pingpong_ball').css({
		'position' : 'fixed',
		'left' : randomPositionLeft,
		'top' : randomPositionTop 
	})
// Math.random() * (max-min) + min
// Math.random() * (75-330) + 330
});