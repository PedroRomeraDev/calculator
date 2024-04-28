function appendToDisplay(value) {
    console.log('appendToDisplay:', value);
    document.getElementById('display').value += value;
}

function clearDisplay() {
    console.log('clearDisplay');
    document.getElementById('display').value = '';
}

function calculate() {
    console.log('calculate');
    try {
        var expression = document.getElementById('display').value;
        var result = Function('"use strict";return (' + expression + ')')();
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
