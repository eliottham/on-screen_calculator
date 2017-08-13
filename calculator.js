var calculation = [];
var display = [];

function sign(element) {
	return ((typeof element != "number") && (element != "="));
}

function log(number) {
	if(typeof number == "number") {
		display.push(number);
		$('#console').val(display.join(''));
	}
	else {
		display = [];
		$('#console').val(number);
	}

	if(number == "AC") {
		$('#console').val(0);
		calculation = [];
	}
	else if(number != "=") {
		calculation.push(number);
	}
	else {
		var index = calculation.findIndex(sign);
		var num1 = calculation.slice(0, index);
		var num2 = calculation.slice(index + 1, calculation.length);
		num1 = Number(num1.join(''));
		num2 = Number(num2.join(''));

		switch(calculation[index]){
			case("+"): 
				add(num1, num2);
				break;
			case("-"):
				subtract(num1, num2);
				break;
			case("*"):
				multiply(num1, num2);
				break;
			case("/"):
				divide(num1, num2);
				break;			
		}
	}
}

function add(x, y) {
	$('#console').val(x + y);
	calculation = [];
}

function subtract(x, y) {
	$('#console').val(x - y);
	calculation = [];
}

function multiply(x, y) {
	$('#console').val(x * y);
	calculation = [];
}

function divide(x, y) { 
	$('#console').val(x / y);
	calculation = [];
}

