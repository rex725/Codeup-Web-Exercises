'use strict';
// $(document).ready(function() {
	var myLatLng = {lat: 29.4241, lng: -98.4936};

	var map = new google.maps.Map(document.getElementById('map-canvas'), {
    	zoom: 10,
    	center: myLatLng
	});

  	var marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	draggable: true,
    	title: 'Drag Me'
    });
  	var request = $.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
			APPID: 'bd15fdbf2aaee6dcc1c7a154b662945c',
			lat: myLatLng.lat,
			lon: myLatLng.lng,
			units: 'imperial',
			cnt: '3'
		});
  	console.log(marker)
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
	marker.addListener('dragend', (function(event) {
		var position = marker.getPosition();
		var myLat = position.lat();
		var myLng = position.lng();
		var request = $.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
			APPID: 'bd15fdbf2aaee6dcc1c7a154b662945c',
			lat: myLat,
			lon: myLng,
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
	}));
// });