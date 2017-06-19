(function temperatureConversion (farenheit, celsius) {
	// var temperature = prompt('What temperature would you like to convert?');
	// var
	var temperatures = []
	var farenheitToCelsius = confirm('Would you like to convert farenheit to celsius?');
		if (farenheitToCelsius) {
				while (farenheitToCelsius) {
					var intializeConversion = confirm('Would you like to add some temperatures?');
						if (intializeConversion) {
							var farenheit = prompt('What is the temperature in farenheit?');
							temperatures.push(farenheit);
						} else {
							break;
						}
				}
		} 
		else {
			var celsiusToFarenheit = confirm('Would you like to convert celsius to farenheit?');
				if (celsiusToFarenheit) {
				while (celsiusToFarenheit) {
					var intializeConversion = confirm('Would you like to add some temperatures?');
						if (intializeConversion) {
							var celsius = prompt('What is the temperature in farenheit?');
							temperatures.push(celsius);
						} else {
							break;
						}
				}
			
		}
	console.log(temperatures);
	temperatures.forEach(function (element, index, array) {;
		return alert('The temperature in Farenheit was ' + element +' and the temperature in celsius is ' + (element-32)*.5556 + '.');
	});
})();