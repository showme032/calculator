const display = document.querySelector('.lcd-display');
let firstNumber;
let operator;
let secondNumber;

// Populate the display when a number button is clicked
document.querySelectorAll('.btn-num')
.forEach((button) => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  })
});

// Enable decimal separator only if not already entered
document.querySelector('.btn-dot').addEventListener('click', () => {
  if (display.textContent.includes('.')) return
  else {
    display.textContent += '.';
  }
});

// Store first number, operator value when operator button is clicked, clear display for second number
document.querySelectorAll('.btn-sym')
  .forEach((button) => {
    button.addEventListener('click', () => {
      firstNumber = +display.textContent;
      operator = button.textContent;
      display.textContent = '';
    })
  })

// Get second number value when '=' is clicked, calculate the result, round it to 3 decimals and display it
document.querySelector('.btn-operate').addEventListener('click', () =>{
  secondNumber = +display.textContent;
  
  let result = operate(operator, firstNumber, secondNumber);
  if (typeof result == 'number') {
    result = Math.round(result*1000)/1000;
  };

  display.textContent = result;
})

// Clear the values when 'AC' clicked
document.querySelector('.btn-ac').addEventListener('click', () => {
  display.textContent = '';
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
})

// Operate on numbers, based on operator
function operate(operator, a, b) {
  switch(operator) {
    case ' + ':
      return add(a, b);
      break;
    case ' - ':
      return substract(a, b);
      break;
    case ' * ':
      return multiply(a, b);
      break;
    case ' / ':
      return divide(a, b);
      break;
  }
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
  if (b === 0) return "To Infinity & Beyond"
  else return a / b;
}

