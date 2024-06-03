function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b == 0) return 'Error';
    return a / b;
};

function percent(a) {
    return a / 100;
}

function operate(op, num1, num2) {
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        case '%':
            return percent(num1);    
        default:
            return null;         
    }
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
                case '.':
                    displayValue += key;
                    break;
                case 'AC':
                    displayValue = '';
                    firstNumber = null;
                    operator = null;
                    break;
                case '←':
                    displayValue = displayValue.slice(0,-1);
                    break;
                case '%':    
                case '÷':
                case '×':
                case '-':
                case '+':
                    if (firstNumber === null) {
                        firstNumber = parseFloat(displayValue);
                    }
                    else if (operator) {
                        firstNumber = operate(operator, firstNumber, parseFloat(displayValue));
                    }
                    operator = key;
                    displayValue += ` ${key} `;
                    break;  
                case '=':
                    if (firstNumber !== null && operator !== null) {
                        const secondNumber = parseFloat(displayValue.split(' ').pop());
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