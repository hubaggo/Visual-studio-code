function calculate(a, b, operator) {
    let a = Math.floor(Math.random() * 25);
    let b = Math.floor(Math.random() * 25);
    let operator = "*"

    if (operator === "*") {
        return a * b;
    }
    
    else if (operator === "/") {
        return a / b;
    }

    else if (operator === "+") {
        return a + b;
    }

    else if (operator === "-") {
        return a - b;
    }
    
}
calculate()