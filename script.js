// Variables to store the operation
let currentInput = '';      // Current number input
let previousInput = '';     // Previous number input
let operator = '';          // Current operator

function updateDisplay(value) {
  document.getElementById("inputDisplay").value = value;
}

function clearDisplay() {
  document.getElementById("inputDisplay").value = "";
  currentInput = '';
  previousInput = '';
  operator = '';
}

 // Function to set the operator and store the first number
 function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculateResult(); // If there's a previous input, calculate it first
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}


// Function to call the correct arithmetic function based on the operator
function operate(operator, num1, num2) {
  switch (operator) {
      case '+':
          return add(num1, num2);
      case '-':
          return subtract(num1, num2);
      case '*':
          return multiply(num1, num2);
      case '/':
          return divide(num1, num2);
      default:
          return null;
  }
}

 // Function to append numbers to the display
 function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return; // Prevent multiple dots
  currentInput += number;
  updateDisplay(currentInput);
}

  // Function to calculate and display the result
  function calculateResult() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    if (isNaN(num1) || isNaN(num2)) return;

    const result = operate(operator, num1, num2);
    updateDisplay(result);
    previousInput = result.toString();
    currentInput = '';
    operator = '';
}


// Basic arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : 'Error';
}