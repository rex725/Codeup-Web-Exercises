(function() {
// Number Inputs
	var numberInput1 = document.getElementById('number_values_1');
	var inputNumbers = document.getElementsByClassName('numbers');
	var operatorInput = document.getElementById('operator_input');
	var operator = document.getElementsByClassName('operators');
	var numberInput2 = document.getElementById('number_values_2');
	var decimal = document.getElementById('.');
	var inverseOperation = document.getElementById('+/-');
		inputNumbers[0].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 7;
			} else {
				numberInput2.value += 7;
			};
		});
		inputNumbers[1].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 8;
			} else {
				numberInput2.value += 8;
			};
		});
		inputNumbers[2].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 9;
			} else {
				numberInput2.value += 9;
			};
		});
		inputNumbers[3].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 4;
			} else {
				numberInput2.value += 4;
			};
		});
		inputNumbers[4].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 5;
			} else {
				numberInput2.value += 5;
			};
		});
		inputNumbers[5].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 6;
			} else {
				numberInput2.value += 6;
			};
		});
		inputNumbers[6].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 3;
			} else {
				numberInput2.value += 3;
			};
		});
		inputNumbers[7].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 2;
			} else {
				numberInput2.value += 2;
			};
		});
		inputNumbers[8].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 1;
			} else {
				numberInput2.value += 1;
			};
		});
		inputNumbers[9].addEventListener('click', function() {
			if (operatorInput.value == '') {
				numberInput1.value += 0;
			} else {
				numberInput2.value += 0;
			}
		});
		
//Operator
		decimal.addEventListener('click', function() {
			if(operatorInput.value == '') {
				numberInput1.value +='.';
			} else {
				numberInput2.value +='.';
			}
		});
		inverseOperation.addEventListener('click', function() {
			if(operatorInput.value == '') {
				numberInput1.value = numberInput1.value * Math.sign(-1);
			} else {
				numberInput2.value = numberInput2.value * Math.sign(-1);
			}
		});
		operator[0].addEventListener('click',function() {
			operatorInput.value = '%';
		});
		operator[1].addEventListener('click',function() {
			operatorInput.value = '/';
		});
		operator[2].addEventListener('click',function() {
			operatorInput.value = '*';
		});
		operator[3].addEventListener('click',function() {
			operatorInput.value = '-';
		});
		operator[4].addEventListener('click',function() {
			operatorInput.value = '+';
		});
	var runEquation = document.getElementById('run_operation');
		runEquation.addEventListener('click', function equals() {
			switch(operatorInput.value) {
				case '%':
					numberInput1.value = parseFloat(numberInput1.value)%parseFloat(numberInput2.value);
					operatorInput.value = '';
					numberInput2.value = '';
					break;
				case '/':
					numberInput1.value = parseFloat(numberInput1.value)/parseFloat(numberInput2.value);
					operatorInput.value = '';
					numberInput2.value = '';
					break;
				case '*':
					numberInput1.value = parseFloat(numberInput1.value)*parseFloat(numberInput2.value);
					operatorInput.value = '';
					numberInput2.value = '';
					break;
				case '-':
					numberInput1.value = parseFloat(numberInput1.value)-parseFloat(numberInput2.value);
					operatorInput.value = '';
					numberInput2.value = '';
					break;
				default:
					numberInput1.value = parseFloat(numberInput1.value)+parseFloat(numberInput2.value);
					operatorInput.value = '';
					numberInput2.value = '';
					break;
			};
		});
	var AC = document.getElementById('AC');
		AC.addEventListener('click', function() {
			numberInput1.value = '';
			operatorInput.value = '';
			numberInput2.value = '';
		});
//Key Events
	document.body.addEventListener('keypress', function(event) {
		switch(event.key) {
			case '%':
				operatorInput.value = '%';
				break;
			case '/':
				operatorInput.value = '/';
				break;
			case '*':
				operatorInput.value = '*';
				break;
			case '-':
				operatorInput.value = '-';
				break;
			case '+':
				operatorInput.value = '+';
				break;
			case '0':
				if (operatorInput.value == '') {
					numberInput1.value += 0;
				} else {
					numberInput2.value += 0;
				};
				break;
			case '1':
				if (operatorInput.value == '') {
					numberInput1.value += 1;
				} else {
					numberInput2.value += 1;
				};
				break;
			case '2':
				if (operatorInput.value == '') {
					numberInput1.value += 2;
				} else {
					numberInput2.value += 2;
				};
				break;
			case '3':
				if (operatorInput.value == '') {
					numberInput1.value += 3;
				} else {
					numberInput2.value += 3;
				};
				break;
			case '4':
				if (operatorInput.value == '') {
					numberInput1.value += 4;
				} else {
					numberInput2.value += 4;
				};
				break;
			case '5':
				if (operatorInput.value == '') {
					numberInput1.value += 5;
				} else {
					numberInput2.value += 5;
				};
				break;
			case '6':
				if (operatorInput.value == '') {
					numberInput1.value += 6;
				} else {
					numberInput2.value += 6;
				};
				break;
			case '7':
				if (operatorInput.value == '') {
					numberInput1.value += 7;
				} else {
					numberInput2.value += 7;
				};
				break;
			case '8':
				if (operatorInput.value == '') {
					numberInput1.value += 8;
				} else {
					numberInput2.value += 8;
				};
				break;
			case '9':
				if (operatorInput.value == '') {
					numberInput1.value += 9;
				} else {
					numberInput2.value += 9;
				};
				break;
			case '.':
				if(operatorInput.value == '') {
					numberInput1.value +='.';
				} else {
					numberInput2.value +='.';
				};
				break;
			case '=':
				switch(operatorInput.value) {
					case '%':
						numberInput1.value = parseFloat(numberInput1.value)%parseFloat(numberInput2.value);
						operatorInput.value = '';
						numberInput2.value = '';
						break;
					case '/':
						numberInput1.value = parseFloat(numberInput1.value)/parseFloat(numberInput2.value);
						operatorInput.value = '';
						numberInput2.value = '';
						break;
					case '*':
						numberInput1.value = parseFloat(numberInput1.value)*parseFloat(numberInput2.value);
						operatorInput.value = '';
						numberInput2.value = '';
						break;
					case '-':
						numberInput1.value = parseFloat(numberInput1.value)-parseFloat(numberInput2.value);
						operatorInput.value = '';
						numberInput2.value = '';
						break;
					default:
						numberInput1.value = parseFloat(numberInput1.value)+parseFloat(numberInput2.value);
						operatorInput.value = '';
						numberInput2.value = '';
						break;
				};
		}
	});
})();