

document.addEventListener('DOMContentLoaded', function() {
  // Get display elements
  var prevOperand = document.querySelector('.previous-operand');
  var currOperand = document.querySelector('.current-operand');
  var buttons = document.querySelectorAll('.btn, .equals');

  // Calculator state
  var currentValue = '';
  var previousValue = '';
  var currentOperator = '';

  // Update the calculator display
  function updateDisplay() {
    prevOperand.textContent = previousValue + ' ' + currentOperator;
    if (currentValue === '') {
      currOperand.textContent = '0';
    } else {
      currOperand.textContent = currentValue;
    }
  }

  // Clear all values
  function clearAll() {
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    updateDisplay();
  }

  // Delete last character
  function deleteLast() {
    var chars = [];
    for (var i = 0; i < currentValue.length; i++) {
      chars.push(currentValue[i]);
    }
    chars.pop();
    currentValue = '';
    for (var j = 0; j < chars.length; j++) {
      currentValue += chars[j];
    }
    updateDisplay();
  }

  // Add number or decimal
  function appendNumber(num) {
    if (num === '.') {
      var hasDot = false;
      for (var i = 0; i < currentValue.length; i++) {
        if (currentValue[i] === '.') {
          hasDot = true;
        }
      }
      if (hasDot) return;
    }
    currentValue += num;
    updateDisplay();
  }

  // Choose operator
  function chooseOperator(op) {
    if (currentValue === '') return;
    if (previousValue !== '') {
      compute();
    }
    currentOperator = op;
    previousValue = currentValue;
    currentValue = '';
    updateDisplay();
  }

  // Compute result
  function compute() {
    var result = 0;
    var prev = parseFloat(previousValue);
    var curr = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(curr)) return;
    if (currentOperator === '+') {
      result = prev + curr;
    } else if (currentOperator === '−') {
      result = prev - curr;
    } else if (currentOperator === '×') {
      result = prev * curr;
    } else if (currentOperator === '÷') {
      result = prev / curr;
    } else if (currentOperator === '%') {
      result = prev % curr;
    }
    currentValue = result.toString();
    previousValue = '';
    currentOperator = '';
    updateDisplay();
  }

  // Add event listeners to buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      var action = this.getAttribute('data-action');
      var number = this.getAttribute('data-number');
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
  }

  // Start with clear display
  clearAll();
});


