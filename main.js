(function (){
    "use strict";
    const $numberButtons = document.querySelector(".number");           //define variables
    const $operatorButtons = document.querySelectorAll (".operator, .clear");
    const $equalButton = document.querySelector(".equal-sign");
    const calculation = [];
    
    //console.dir($numberButtons);
    
    
    
    function pushNumber(event) {                                        //create functions
       // alert(event.target.value);
       calculation.push(event.target.value);
    }
    
    
    function pushOperator(event) {
           // alert(event.target.value);
            calculation.push(event.target.value); //every time a button is pushed, value is added into calculation array
     }
    
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
            }
    
        }
    
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
        }
    }
    
    
                     // num1 += calculation[i];
    
            
            
        
    
    
    
    
    
    //console.log("event", event);
    //console.log("event target", event.target);
    //console.log("event target value", event.target.value);
    //consoel.log("this, this");
    
    
    
    
    
    // example using loop...
    
    //      $numberButton.addEventListener("click", pushNumber);
    
    //          for (let i = 0; i < $numberButtons.length; i++) { //let i start at zero, run as long as i < number of buttons length, and add 1 every time loop is run
    //           console.log($numberButtons[i]);
    //}
    
    
    $numberButtons.forEach(function (button) {                //step 1 make buttons alert pop-up 
        button.addEventListener("click", pushNumber);          //"button" lets eventListener know you're targeting (button) parameter 
        //console.log(button);                                  //use for each to loop through node list 
    });
    
    $operatorButtons.forEach(function (button){
        button.addEventListener("click", pushNumber);
    });
    
    
    $operatorButtons.forEach(function (button){
        button.addEventListener("click", pushNumber);
    });
    
    $equalButton.addEventListener("click", calculate);      //we dont need forEach because only one target
    
    
    
    
    })();
    