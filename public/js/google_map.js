	var myLatLng = {lat: -25.363, lng: 131.044};

	var map = new google.maps.Map(document.getElementById('map-canvas'), {
    	zoom: 4,
    	center: myLatLng
	});

  	var marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	draggable: true,
    	title: 'Drag Me'
    });
console.log(marker);