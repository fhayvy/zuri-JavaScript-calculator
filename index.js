
function add(numA, numB){
    return numA + numB;
}
function subtract(numA, numB){
    return numA - numB;
}
function multiply(numA, numB){
    return numA * numB;
}
function divide(numA, numB){
    return numA / numB;
}
function modulus(numA, numB){
    return numA % numB;
}


function userComputation(){
    var numA = parseFloat(prompt("Please input your first number:"))
    var operator = prompt("Please choose an operator (+, -, *, /, %):")
    var numB = parseFloat(prompt("Please input another number:"))
    var result = 0;
    if (operator == "+"){
        result = add(numA, numB);
    }
    else if (operator == "-"){
        result = subtract(numA, numB);
    }
    else if (operator == "*"){
        result = multiply(numA, numB);
    }
    else if (operator == "/"){
        result = divide(numA, numB);
    }
    else if (operator == "%"){
        result = modulus(numA, numB);
    }
    else{
        alert("The operator you entered was invalid! Please pick an operator from the options:")
    }
    var confirm = window.confirm(`The value of ${numA} ${operator} ${numB} is ${result}, Do you want to perform another calculation? \nPlease the link to my github repository will appear when you are done with the calculator.?`);

    if (confirm) {
        userComputation()
    } else {
        alert("https://github.com/fhayvy/zuri-JavaScript-calculator")
        alert("Thank you for trying our calculator out.")
    }
}

userComputation()