# Basic Calculator

This is a JavaScript program that creates a basic calculator with HTML and CSS. It performs addition, subtraction, multiplication, and division based on user input, and displays the result on the calculator screen.

## Getting Started

You can clone the repo for local use by using `git clone` in your terminal. You must have live server installed to run it. 

To use the calculator, simply open the `index.html` file in your web browser. You can then click on the number and operator buttons to enter a calculation, and click the equals button to display the result.

## Code Overview

The JavaScript code is contained in the `index.js` file. Here is an overview of the different functions and variables used in the code:

### Functions

- `pushNumber(button)`: This function is called whenever a number button is clicked. It updates the display value and the calculation array with the clicked number.

- `pushOperator(button)`: This function is called whenever an operator button is clicked. It updates the calculation array with the clicked operator and resets the display value.

- `clearButton(button)`: This function is called whenever the clear button is clicked. It resets the display value and the calculation array to their initial values.

- `calculate()`: This function is called whenever the equals button is clicked. It processes the calculation array to determine the result of the calculation, and displays that result on the calculator screen.

### Variables

- `textButtons`: This variable is an array of all elements with the `number` class. It is used to add event listeners to each number button.

- `textOperator`: This variable is an array of all elements with the `operator` class. It is used to add event listeners to each operator button.

- `textCalculate`: This variable is the element with the `equal-sign` class. It is used to add an event listener to the equals button.

- `clear`: This variable is the element with the `clear` class. It is used to add an event listener to the clear button.

- `screen`: This variable is the element with the `calculator-screen` class. It is used to display the current calculation and result.

- `calculation`: This variable is an array that stores the current calculation.

- `displayValue`: This variable is a string that stores the current display value.

## Contributing

Contributions are welcome! Please feel free to fork this repository and submit a pull request.

## License

This project is `UNLICENSED` and open source, happy coding!
