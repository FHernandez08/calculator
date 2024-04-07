const display = document.getElementById('display');

// function for appendToDisplay
function appendToDisplay(input) {
    display.value += input;
}

// function for calculate
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
    }
}

// function for clearDisplay
function clearDisplay() {
    display.value = "";
}