//function Calculator(


//alert("hello");
const textButtons = document.querySelectorAll(".number");
const textOperator = document.querySelectorAll(".operator");
const textCalculate = document.querySelector(".equal-sign");
const clear = document.querySelector(".clear");
let screen = document.querySelector(".calculator-screen");
let calculation = [];


let displayValue = '';

//target is .calculator-screen.innerHTML
//need to update the value with the values contained in the calculation array 
function updateDisplay() {

};


function pushNumber(button) {
    displayValue += this.innerHTML;
    screen.value = displayValue;
    calculation.push(this.innerHTML); 
    //this.textButtons.innerHTML = this.screen;
};

function pushOperator(button) {
    
   // alert(this.innerHTML);
    calculation.push(this.innerHTML);
    displayValue = " ";
    screen.value = displayValue
    //console.log(calculation);
};

function clearButton(button) {
    displayValue = " ";
    screen.value = displayValue
   // alert(this.innerHTML);
    calculation = [];
   
};

function calculate() {

    //alert("=");
    let num1 = "",                  //declare as empty string
        num2 = "",
        operator = null;                        //operator is null or 
     const operators = ["*", "/", "+", "-"];
    
        for(let i = 0; i < calculation.length; i++) {
            let char = calculation[i];
            if(operators.includes(char)) {
                operator = char;
            } else if (!operator) {
                num1 += char;
            } else {
                num2 += char;
            };
    
        };
    
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

  

    if (operator === "+") {
        screen.value = (num1 + num2);
    
    } else if (operator === '-' ) {
       // alert(num1 - num2);
       screen.value = (num1 - num2);
   
    } else if (operator === "*") {
        //alert(num1 * num2);
        screen.value = (num1 * num2);
      
    } else if (operator === "/") {
       // alert(num1 / num2);
       screen.value = (num1 / num2);
   
    } else {
            alert("Uh, oh! Something went wrong!");
        };
    
       
    };




textCalculate.addEventListener("click", calculate);

clear.addEventListener("click",clearButton);

 textButtons.forEach((button) => {
    button.addEventListener("click",pushNumber)
});

textOperator.forEach((button) => {
    button.addEventListener("click",pushOperator) 
});

 

//)



