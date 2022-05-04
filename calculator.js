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

function operate(operator, a, b){
  switch (operator) {
      case '+':
          return add(a,b);
          break;
      case '-':
          return subtract(a,b);
          break;
      case 'x':
          return multiply(a,b);
          break;
      case '*':
          return multiply(a,b);
      case '/':
          return divide(a,b);
          break;
      }
  }

const displayScreen = document.getElementById('display');
const answerScreen = document.getElementById('answer');
const operatorZone = document.getElementById('operators');
const operandZone = document.getElementById('operands');
const wholeCalculator = document.getElementById('calculator');
const eqlBtn = document.getElementById('equals');

document.querySelectorAll('operators').forEach(item => {
  item.addEventListener('click', event => {
      updateOperands(item.textContent)
  })
})

document.querySelectorAll('operands').forEach(item => {
        item.addEventListener('click', event => {
            updateOperator(item.textContent)
        })
    })

/*function clickListener(event) {
    const numbers = event.target.id;
    const operand = event.target.id;
    operate(numbers, operand);
    return displayScreen
}

  

    function updateOperator(value){
        if (firstOperandSpan.textContent != '' && secondOperandSpan.textContent == ''){
        operatorSpan.textContent = value;
        } else if (firstOperandSpan.textContent != '' && secondOperandSpan.textContent != ''){
            let meanwhile = roundTo5decimalsMax(operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent));
            firstOperandSpan.textContent = meanwhile;
            answerZone.textContent = meanwhile;
            operatorSpan.textContent = value;
            secondOperandSpan.textContent = '';
            checkIfEvilAll();
        } else if (firstOperandSpan.textContent == '' && answerZone.textContent != ''){
            firstOperandSpan.textContent = answerZone.textContent;
            operatorSpan.textContent = value;
            checkIfEvilAll();
        }
     }

    



function displayHistory(toHistory) {
    if (toHistory === 'plus') {
      history.textContent += ' + ';
    } else if (toHistory === 'minus') {
      history.textContent += ' - ';
    } else if (toHistory === 'multiply') {
      history.textContent += ' * ';
    } else if (toHistory === 'divide') {
      history.textContent += ' ÷ ';
    } else {
      history.textContent += `${toHistory} `;
    }
  }
  
  function displayInput(task, value) {
    if (task === 'add') {
      if (newInput === 'Infinity') {
        newInput = '';
      }
      if (value !== '0' || newInput !== '0') {
        newInput += value;
        input.textContent = newInput;
      }
    } else if (task === 'backspace') {
      if (newInput === 'Infinity') {
        newInput = '';
      } else {
        newInput = newInput.slice(0, -1);
      }
      if (newInput.indexOf('.') === -1) {
        decimalPoint.removeAttribute('disabled');
      }
      input.textContent = newInput;
    } else if (task === 'clear') {
      newInput = '';
      decimalPoint.removeAttribute('disabled');
      if (value === 'full') {
        firstNumber = '';
        secondNumber = '';
        action = '';
        history.textContent = '';
        input.textContent = newInput;
      }
    }
  }

  */