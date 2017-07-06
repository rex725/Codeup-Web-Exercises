'use strict';
$(document).ready(function() {
	$('#search').click(function() {
		var request = $.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
			APPID: 'bd15fdbf2aaee6dcc1c7a154b662945c',
			lat: $('#lat').val(),
			lon: $('#lon').val(),
			units: 'imperial',
			cnt: '3'
		});
		request.done(function(data, status) {
			console.log(data);
			$('#city').html(data.city.name)
			var forecast = '';
			data.list.forEach(function (element, index, array) {
				forecast += '<ul><li>';
				forecast += '<h3 class="temps">' + element.temp.min + '/' + element.temp.max + '</h3>';
				forecast += '</li><li>';
				forecast += '<img src="http://openweathermap.org/img/w/' + element.weather[0].icon + '.png">';
				forecast += '</li><li>';
				forecast += '<strong>' + element.weather[0].main + ':</strong> ' + element.weather[0].description;
				forecast += '</li><li>';
				forecast += '<strong>Humidity:</strong> ' + element.humidity;
				forecast += '</li><li>';
				forecast += '<strong>Wind:</strong> ' + element.speed;
				forecast += '</li><li>';
				forecast += '<strong>Pressure:</strong> ' + element.pressure;
				forecast += '</li></ul>';
			});
			
			$('#weather_forecast').html(forecast);
		});
		request.fail(function(jqXhr, status, error) {
			console.log('Status: ' + status + ' Error: ' + error);
		});
	});
});