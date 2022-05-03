function add(a,b) {
    return a + b
}
add();

function subtract(a,b) {
    return a - b
}
subtract();

function multiply(a,b) {
    return a * b
} 
multiply();

function divide(a,b) {
    return a / b
}
divide();

function operate(a,b) {
    if (a + b) return add();
    if (a - b) return subtract();
    if (a * b) return multiply();
    if (a / b) return divide();
}

