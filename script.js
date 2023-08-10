var display = document.querySelector('#display');

function showDisplay(value) {
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let valor1 = eval(display.value);
    display.value = valor1;

    if (display.value == "undefined") {
        display.value = "";
    }
}
