// Define an immediately invoked function expression (IIFE) to keep the global namespace clean
(function() {
    "use strict"; // Enable strict mode for better code quality and security

    // Select various elements from the HTML document
    const textButtons = document.querySelectorAll(".number"); 
    const textOperator = document.querySelectorAll(".operator"); 
    const textCalculate = document.querySelector(".equal-sign"); 
    const clear = document.querySelector(".clear"); 
    let screen = document.querySelector(".calculator-screen"); 
    let calculation = []; // Create an empty array to store the calculation

    let displayValue = ''; // Initialize the display value as an empty string

    function pushNumber(button) {
        //console.log(this.innerHTML);
        displayValue += this.innerHTML; // Append the clicked number to the display value
        screen.value = displayValue; // Update the calculator screen with the new display value
        calculation.push(this.value); // Push the clicked number onto the calculation array
        //console.log(this.value); 
    };

    function pushOperator(button) {
        calculation.push(this.value); // Push the clicked operator onto the calculation array
        displayValue = " "; // Reset the display value to an empty string
    };

    function clearButton(button) {
        displayValue = " "; // Reset the display value to an empty string
        screen.value = displayValue; // Update the calculator screen with the new display value
        calculation = []; // Reset the calculation array to an empty array
    };

    function calculate() {
        //initialize variables
        let num1 = ""; 
        let num2 = ""; 
        let operator = null; 
        //define operators
        const operators = ["*", "/", "+", "-"]; 

        // Loop through each element of the calculation array
        for(let i = 0; i < calculation.length; i++) {
            let char = calculation[i]; // Store the current element of the calculation array in a variable

            // If the current element is an operator, set the operator variable to the current element
            if(operators.includes(char)) {
                operator = char;
            } else if (!operator) { // If the operator variable is still null and the current element is not an operator, append the current element to num1
                num1 += char;
            } else { // If the operator variable is not null and the current element is not an operator, append the current element to num2
                num2 += char;
            };    
        };

        // Parse the strings num1 and num2 as floating point numbers
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Perform the appropriate calculation based on the operator variable and update the calculator screen with the result
        if (operator === "+") {
            screen.value = (num1 + num2);
        } else if (operator === '-' ) {
            screen.value = (num1 - num2);
        } else if (operator === "*") {
            screen.value = (num1 * num2);
        } else if (operator === "/") {
            screen.value = (num1 / num2);
        } else { // If the operator is not recognized, display an error message
            alert("Uh, oh! Something went wrong!");
        };
    };

    // Add event listeners to the calculate, clear, number, and operator buttons
    textCalculate.addEventListener("click", calculate);
    clear.addEventListener("click",clearButton);
    textButtons.forEach((button) => {
        button.addEventListener("click",pushNumber)
    });
    textOperator.forEach((button) => {
        button.addEventListener("click",pushOperator) 
    });

})();




