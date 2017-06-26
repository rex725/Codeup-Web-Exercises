'use strict';
 (function () {
 	var mapOptions = {
 	zoom: 10,

 		// center: {
 		// 	lat: 29.426792,
 		// 	lng: -98.489602
	 	// }
	 };

	 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	 var restaurants = [
	 	{
	 		name: 'Texas Roadhouse',
	 		cuisine: [
	 			'Southwestern',
	 			'Steakhouse'
	 		] ,
	 		atmosphere: [
	 			'Comfortable'
	 		],
	 		address: '2751 SE Military Dr, San Anotonio, TX 78223',
	 		infoWindowContent: '<h1>Texas Roadhouse</h1><h2>Lip lickin\' good steak!</h2><ul><li>It\'s got a great steak for a reasonable price.</li><li>The rolls are delicious.</li><li>You can throw your peanuts on the floor.</li></ul>'
	 	},

	 	{
	 		name: 'Tower of the Americas',
			cuisine: [
				'Fine Dining',
			] ,
			atmosphere: [
				'Business casual'
			],
			address: '739 E Cesar E. Chavez Blvd, San Antonio, TX 78205',
			infoWindowContent: '<h1>Tower of the Americas</h1><h2>A majestic view of San Antonio!</h2><ul><li>The view.</li><li>Good food.</li><li>You don\t get too motion sick.</li></ul>'
	 	},

	 	{
	 		name: 'Red Robin',
			cuisine: [
				'Burgers'
			],
			atmosphere: [
				'Relaxed'
			],
			address: '1750 N Loop 1604 E #102, San Antonio, TX 78232',
			infoWindowContent: '<h1>Red Robin</h1><h2>The king of burgers lives here.</h2><ul><li>RElaxed atmosphere.</li><li>The campfire sauce.</li><li>Has an eggcellent burger.</li></ul>'	 		
	 	}
	 ]
	 var geocoder = new google.maps.Geocoder();
	 
	 restaurants.forEach(function(restaurant, index, array) {
	 	geocoder.geocode({ 'address': restaurant.address}, function (results, status) {
	 		if (status === google.maps.GeocoderStatus.OK) {
	 			map.setCenter(results[0].geometry.location);
	 			results.forEach(function (result) {
	 				console.log(result.formatted_address);
	 				var marker = new google.maps.Marker({
	 					animation: google.maps.Animation.DROP,
	 					position: result.geometry.location,
	 					map: map
	 				});
	 				marker.addListener('click', function() {
	 					var infoWindow = new google.maps.InfoWindow({
	 						content: restaurant.infoWindowContent
						});
						infoWindow.open(map, marker);
					});
				})
	 		} else {
	 			alert('Geocoding was not successful. Geocoding STATUS: ' + status);
	 		}
	 	});

	 });

	 
})();