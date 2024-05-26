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
    return a / b;
};

const firstNum = 0;
const op = 0;
const secondNum = 0;

function operate(op, num1, num2) {
    switch(op) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;   
        case '×':
            multiply(num1, num2);
            break;
        case '÷':
            divide(num1, num2);
            break;         
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let displayValue = '';

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const key = this.getAttribute('data-key');

            switch(key) {
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
                    break;
                case '←':
                    displayValue = displayValue.slice(0,-1);
                    break;
                case '%':
                case '÷':
                case '×':
                case '-':
                case '+':
                    displayValue += ` ${key} `;
                    break;  
                case '=':
                    //perform calculations

                    break;
                default:
                    break;    
            }

            display.textContent = displayValue || '0';
        });
    });
});