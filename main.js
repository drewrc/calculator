//alert("hello");
const textButtons = document.querySelectorAll(".number");
const textOperator = document.querySelectorAll(".operator");
const textCalculate = document.querySelectorAll(".equal-sign");
const calculation = [];

textButtons.forEach((button) => {
    button.addEventListener("click",pushNumber) 
});

textOperator.forEach((button) => {
    button.addEventListener("click",pushOperator) 
});

textCalculate.forEach((button) => {
    button.addEventListener("click",calculate) 
});

function pushNumber(button) {
    alert(this.innerHTML);
    calculation.push(this.innerHTML);
    
};

function pushOperator(button) {
    alert(this.innerHTML)
    calculation.push(this.innerHTML);
    console.log(calculation);
};

function calculate(button) {
     alert(calculation);
     

};



//let clear = document.queryselector("clear");addEventListener("click", () => {
 //   console.log("You clicked?");
 // });

