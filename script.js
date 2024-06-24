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
    if (b == 0) return 'Error';
    return a / b;
}

function percent(a) {
    return a / 100;
}

function operate(op, num1, num2) {
    let result;
    switch (op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '×':
            result = multiply(num1, num2);
            break;
        case '÷':
            result = divide(num1, num2);
            break;
        case '%':
            result = percent(num1);
            break;
        default:
            return null;
    }
    // Round result to 6 decimal places
    return parseFloat(result.toFixed(6));
}

document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let displayValue = '';
    let firstNumber = null;
    let operator = null;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const key = this.getAttribute('data-key');

            switch (key) {
                case '0':
                case '1':
                case '2':  
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    displayValue += key;
                    break;
                case '.':
                    // Check if '.' is already in displayValue
                    if (!displayValue.includes('.')) {
                        displayValue += key;
                    }
                    break;
                case 'AC':
                    displayValue = '';
                    firstNumber = null;
                    operator = null;
                    break;
                case '←':
                    displayValue = displayValue.slice(0, -1);
                    break;
                case '%':
                case '÷':
                case '×':
                case '-':
                case '+':
                    if (firstNumber === null) {
                        firstNumber = parseFloat(displayValue);
                    } else if (operator) {
                        firstNumber = operate(operator, firstNumber, parseFloat(displayValue));
                        displayValue = firstNumber.toString();
                    }
                    operator = key;
                    displayValue = '';
                    break;  
                case '=':
                    if (firstNumber !== null && operator !== null) {
                        const secondNumber = parseFloat(displayValue);
                        const result = operate(operator, firstNumber, secondNumber);
                        displayValue = result.toString();
                        firstNumber = null;
                        operator = null;
                    }
                    break;
                default:
                    break;    
            }

            display.textContent = displayValue || '0';
        });
    });
});
