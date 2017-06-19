(function temperatureConversion (farenheit, celsius) {
	// var temperature = prompt('What temperature would you like to convert?');
	// var
	var farenheitToCelsius = confirm('Would you like to convert farenheit to celsius?');
		if (farenheitToCelsius) {
			var farenheit = prompt('What is the temperature in farenheit?');
			console.log(farenheit.split(','));
			return alert('The temperature in Farenheit was ' + farenheit +' and the temperature in celsius is ' + (farenheit-32)*.5556 + '.');
		} else {
			var celsiusToFarenheit = confirm('Would you like to convert celsius to farenheit?');
				if (celsiusToFarenheit) {
					var celsius = prompt('What is the temperature in celsius?');
					return alert('The temperature in Celsius was ' + celsius +' and the temperature in farenheit is ' + (((celsius*9)/5)+32) + '.');
				} else {
					return;
				}
			
		}
})();