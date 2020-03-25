function areaCircle(radius) {
    return Math.Pi * Math.Pi * radius;
}

function lengthCircle(radius) {
    return 2 * Math.PI * radius;
}

function arithmeticMean(a, b) {
    return ((a + b) / 2);
}

function calc(a, b, operator) {
    var res = null;

    if(operator == "+") {
        res = a + b;
    }
    else if(operator == "-") {
        res = a - b;
    }
    else if(operator == "*") {
        res = a * b;
    }
    else if(operator == "/") {
        res = a / b;
    }

    return res;
}