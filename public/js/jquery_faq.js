$('document').ready(function() {
	$('#make_details_invisible').click(function() {
		$('dd').toggleClass('invisible');
	});
	$('dt').click(function() {
		$(this).toggleClass('highlight');
	});
	$('#highlight_last_fact').click(function() {
		$('ul').each(function(index, element) {
			$(element).children().last().css('background', 'yellow')
		});
	});
	$('h3').click(function() {
		$(this).next().css('font-weight', 'bold');
	});
	$('li').click(function() {
		$(this).parent('ul').children().first().css('color', 'blue');
	});
});