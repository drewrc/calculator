
//alert("hello");
const textButtons = document.querySelectorAll(".number");
const textOperator = document.querySelectorAll(".operator, .clear");
const textCalculate = document.querySelector(".equal-sign");
const calculation = [];


function pushNumber(button) {
    alert(this.innerHTML);
    calculation.push(this.innerHTML);
    
};

function pushOperator(button) {
    alert(this.innerHTML)
    calculation.push(this.innerHTML);
    //console.log(calculation);
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
        alert(num1 + num2);
    } else if (operator === '-' ) {
        alert(num1 - num2);
    } else if (operator === "*") {
        alert(num1 * num2);
    } else if (operator === "/") {
        alert(num1 / num2);
    } else {
            alert("Uh, oh! Something went wrong!");
        };
    };


 textButtons.forEach((button) => {
    button.addEventListener("click",pushNumber) 
});

textOperator.forEach((button) => {
    button.addEventListener("click",pushOperator) 
});


textCalculate.addEventListener("click", calculate);


