function updateDisplay(value) {
    const display = document.getElementById('white-space');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('white-space');
    display.value = '';
}

function toggleSign() {
    const display = document.getElementById('white-space');
    if (display.value) {
        display.value = display.value[0]==='-'
            ? display.value.slice(1)
            : `-${display.value}`;
    }
}

function calculateResult() {
    const display = document.getElementById('white-space');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = " Math Error";
    }
}