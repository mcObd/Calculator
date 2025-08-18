
document.addEventListener('DOMContentLoaded', function() {
  // Select display elements
  var prevOperand = document.querySelector('.previous-operand');
  var currOperand = document.querySelector('.current-operand');
  var buttons = document.querySelectorAll('.btn, .equals');

  var current = '';
  var previous = '';
  var operator = '';

  function updateDisplay() {
    prevOperand.textContent = previous + ' ' + operator;
    currOperand.textContent = current || '0';
  }

  function clearAll() {
    current = '';
    previous = '';
    operator = '';
    updateDisplay();
  }

  function deleteLast() {
    current = current.slice(0, -1);
    updateDisplay();
  }

  function appendNumber(num) {
    if (num === '.' && current.indexOf('.') !== -1) return;
    current += num;
    updateDisplay();
  }

  function chooseOperator(op) {
    if (current === '') return;
    if (previous !== '') compute();
    operator = op;
    previous = current;
    current = '';
    updateDisplay();
  }

  function compute() {
    var result = 0;
    var prev = parseFloat(previous);
    var curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return;
    if (operator === '+') result = prev + curr;
    else if (operator === '−') result = prev - curr;
    else if (operator === '×') result = prev * curr;
    else if (operator === '÷') result = prev / curr;
    else if (operator === '%') result = prev % curr;
    current = result.toString();
    previous = '';
    operator = '';
    updateDisplay();
  }

  // Button click handler
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var action = btn.getAttribute('data-action');
      var number = btn.getAttribute('data-number');
      if (number !== null) {
        appendNumber(number);
      } else if (action === 'clear') {
        clearAll();
      } else if (action === 'delete') {
        deleteLast();
      } else if (action === 'equals') {
        compute();
      } else if (action === 'add') {
        chooseOperator('+');
      } else if (action === 'subtract') {
        chooseOperator('−');
      } else if (action === 'multiply') {
        chooseOperator('×');
      } else if (action === 'divide') {
        chooseOperator('÷');
      } else if (action === 'percent') {
        chooseOperator('%');
      }
    });
  });

  // Initialize display
  clearAll();
});
