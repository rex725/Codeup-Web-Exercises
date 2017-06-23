// (function() {
	var input = document.getElementById('number_values_1');
	var inputNumbers = document.getElementsByClassName('numbers');
	var operator = document.getElementsByClassName('operators');
	var decimal = document.getElementById('.');
	var inverseOperation = document.getElementById('+/-');
	var operatorInput = '';
	var numberInput1 = '';
	var numberInput2 = '';
// Number Inputs
		inputNumbers[0].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 7;
				input.value +=7;
			} else {
				numberInput2 += 7;
				input.value +=7
			};
		});
		inputNumbers[1].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 8;
				input.value +=8
			} else {
				numberInput2 += 8;
				input.value += 8
			};
		});
		inputNumbers[2].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 9;
				input.value += 9
			} else {
				numberInput2 += 9;
				input.value += 9
			};
		});
		inputNumbers[3].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 4;
				input.value += 4
			} else {
				numberInput2 += 4;
				input.value += 4
			};
		});
		inputNumbers[4].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 5;
				input.value += 5;
			} else {
				numberInput2 += 5;
				input.value += 5;
			};
		});
		inputNumbers[5].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 6;
				input.value += 6;
			} else {
				numberInput2 += 6;
				input.value += 6;
			};
		});
		inputNumbers[6].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 3;
				input.value += 3;
			} else {
				numberInput2 += 3;
				input.value += 3;
			};
		});
		inputNumbers[7].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 2;
				input.value += 2
			} else {
				numberInput2 += 2;
				input.value += 2
			};
		});
		inputNumbers[8].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 1;
				input.value += 1;
			} else {
				numberInput2 += 1;
				input.value += 1;
			};
		});
		inputNumbers[9].addEventListener('click', function() {
			if (operatorInput == '') {
				numberInput1 += 0;
				input.value += 0;
			} else {
				numberInput2 += 0;
				input.value += 0;
			}
		});
		
//Operators
		decimal.addEventListener('click', function() {
			if(operatorInput == '') {
				numberInput1 += '.';
				input.value += '.';
			} else {
				numberInput2 += '.';
				input.value += '.';
			}
		});
		inverseOperation.addEventListener('click', function() {
			if(operatorInput == '') {
				numberInput1 = numberInput1 * Math.sign(-1);
				input.value = '-' + numberInput1 * Math.sign(-1);
			} else {
				numberInput2 = numberInput2 * Math.sign(-1);
				input.value = numberInput2 * Math.sign(-1);
			}
		});
		operator[0].addEventListener('click',function() {
			operatorInput = '%';
			input.value += '%';
		});
		operator[1].addEventListener('click',function() {
			operatorInput = '/';
			input.value += '/'
		});
		operator[2].addEventListener('click',function() {
			operatorInput = '*';
			input.value += 'x';
		});
		operator[3].addEventListener('click',function() {
			operatorInput = '-';
			input.value += '-'
		});
		operator[4].addEventListener('click',function() {
			operatorInput = '+';
			input.value += '+';
		});
	var runEquation = document.getElementById('run_operation');
		runEquation.addEventListener('click', function equals() {
			switch(operatorInput) {
				case '%':
					input.value = parseFloat(numberInput1)%parseFloat(numberInput2);
					numberInput1 = input.value;
					operatorInput = '';
					numberInput2 = '';
					break;
				case '/':
					input.value = parseFloat(numberInput1)/parseFloat(numberInput2);
					numberInput1 = input.value;
					operatorInput = '';
					numberInput2 = '';
					break;
				case '*':
					input.value = parseFloat(numberInput1)*parseFloat(numberInput2);
					numberInput1 = input.value;
					operatorInput = '';
					numberInput2 = '';
					break;
				case '-':
					input.value = parseFloat(numberInput1)-parseFloat(numberInput2);
					numberInput1 = input.value;
					operatorInput = '';
					numberInput2 = '';
					break;
				default:
					input.value = parseFloat(numberInput1)+parseFloat(numberInput2);
					numberInput1 = input.value;
					operatorInput = '';
					numberInput2 = '';
					break;
			};
		});
	var AC = document.getElementById('AC');
		AC.addEventListener('click', function() {
			input.value = '';
			numberInput1 = '';
			operatorInput = '';
			numberInput2 = '';
		});
//Key Events
	document.body.addEventListener('keypress', function(event) {
		switch(event.key) {
			case '%':
				operatorInput = '%';
				input.value += '%';
				break;
			case '/':
				operatorInput = '/';
				input.value += '/';
				break;
			case '*':
				operatorInput = '*';
				input.value += 'x';
				break;
			case '-':
				operatorInput = '-';
				input.value += '-';
				break;
			case '+':
				operatorInput = '+';
				input.value += '+';
				break;
			case '0':
				if (operatorInput == '') {
					numberInput1 += 0;
					input.value += 0;
				} else {
					numberInput2 += 0;
					input.value += 0;
				};
				break;
			case '1':
				if (operatorInput == '') {
					numberInput1 += 1;
					input.value +=1;
				} else {
					numberInput2 += 1;
					input.value +=1;
				};
				break;
			case '2':
				if (operatorInput == '') {
					numberInput1 += 2;
					input.value +=2;
				} else {
					numberInput2 += 2;
					input.value +=2;
				};
				break;
			case '3':
				if (operatorInput == '') {
					numberInput1 += 3;
					input.value +=3;
				} else {
					numberInput2 += 3;
					input.value +=3;
				};
				break;
			case '4':
				if (operatorInput == '') {
					numberInput1 += 4;
					input.value +=4;
				} else {
					numberInput2 += 4;
					input.value +=4;
				};
				break;
			case '5':
				if (operatorInput == '') {
					numberInput1 += 5;
					input.value +=5;
				} else {
					numberInput2 += 5;
					input.value +=5;
				};
				break;
			case '6':
				if (operatorInput == '') {
					numberInput1 += 6;
					input.value += 6;
				} else {
					numberInput2 += 6;
					input.value += 6;
				};
				break;
			case '7':
				if (operatorInput == '') {
					numberInput1 += 7;
					input.value += 7;
				} else {
					numberInput2 += 7;
					input.value += 7;
				};
				break;
			case '8':
				if (operatorInput == '') {
					numberInput1 += 8;
					input.value += 8;
				} else {
					numberInput2 += 8;
					input.value += 8;
				};
				break;
			case '9':
				if (operatorInput == '') {
					numberInput1 += 9;
					input.value += 9;
				} else {
					numberInput2 += 9;
					input.value += 9;
				};
				break;
			case '.':
				if(operatorInput == '') {
					numberInput1 +='.';
					input.value += '.';
				} else {
					numberInput2 +='.';
					input.value += '.';
				};
				break;
			case '=':
				switch(operatorInput) {
					case '%':
						input.value = parseFloat(numberInput1)%parseFloat(numberInput2);
						numberInput1 = input.value;
						operatorInput = '';
						numberInput2 = '';
						break;
					case '/':
						input.value = parseFloat(numberInput1)/parseFloat(numberInput2);
						numberInput1 = input.value;
						operatorInput = '';
						numberInput2 = '';
						break;
					case '*':
						input.value = parseFloat(numberInput1)*parseFloat(numberInput2);
						numberInput1 = input.value;
						operatorInput = '';
						numberInput2 = '';
						break;
					case '-':
						input.value = parseFloat(numberInput1)-parseFloat(numberInput2);
						numberInput1 = input.value;
						operatorInput = '';
						numberInput2 = '';
						break;
					default:
						input.value = parseFloat(numberInput1)+parseFloat(numberInput2);
						numberInput1 = input.value;
						operatorInput = '';
						numberInput2 = '';
						break;
				};
		}
	});
// })();