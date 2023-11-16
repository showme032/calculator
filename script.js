let displayValue;
let firstNumber;
let operator;
let secondNumber;

// Populate the display when a button is clicked
document.querySelectorAll('.btn-num, .btn-sym')
.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.lcd-display').textContent += button.textContent;
    displayValue = document.querySelector('.lcd-display').textContent;
    console.log(displayValue);
  })
});

// Clear the display when 'AC' clicked
document.querySelector('.btn-ac').addEventListener('click', () => {
  document.querySelector('.lcd-display').textContent = '';
  displayValue = document.querySelector('.lcd-display').textContent;
  console.log(displayValue);
})

// Calculate the input when '=' is clicked
document.querySelector('btn-operate').addEventListener('click', () =>{
  
})

// Operate on numbers, based on operator
function operate(symbol, a, b) {
  let result;
  switch(symbol) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result =substract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result =divide(a, b);
      break;
  }
  document.querySelector('.lcd-display').textContent = result;
}

// Functions for the 4 operators
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

