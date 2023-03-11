
	function calculate() {
		// Get input values
		let num1 = document.getElementById("num1").value;
		let num2 = document.getElementById("num2").value;
		let operator = document.getElementById("operator").value;

		// Validate input values
		if (isNaN(num1) || isNaN(num2)) {
			document.getElementById("error-message").innerHTML = "Please enter valid numbers.";
			return;
		} else {
			document.getElementById("error-message").innerHTML = "";
		}

		// Perform arithmetic operation
		let result;
		switch (operator) {
			case "+":
				result = parseFloat(num1) + parseFloat(num2);
				break;
			case "-":
				result = parseFloat(num1) - parseFloat(num2);
				break;
			case "*":
				result = parseFloat(num1) * parseFloat(num2);
				break;
			case "/":
				result = parseFloat(num1) / parseFloat(num2);
				break;
			default:
				document.getElementById("error-message").innerHTML = "Please choose a valid operator.";
				return;
		}

		// Display result
		document.getElementById("result").value = result;
	}

