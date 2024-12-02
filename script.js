const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id !== 'clear' && button.id !== 'equals') {
            display.value += button.textContent;
        }
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

equalsButton.addEventListener('click', () => {
    display.value = eval(display.value);
});