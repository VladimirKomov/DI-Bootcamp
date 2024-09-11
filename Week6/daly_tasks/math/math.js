function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    try {
        return a / b;
    } catch (e) {
        console.log(e.message);
    }
}

function plus (a, b) {
    return a + b;
}

function minus (a, b) {
    return a - b;
}

export {
    multiply,
    divide,
    plus,
    minus
}