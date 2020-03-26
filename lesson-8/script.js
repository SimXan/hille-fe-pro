// Task 1
const arr = [-246, 753, -468, 475, -683, 476, -583, 746, -581];


function sumAll(args) {
    let sum = args.reduce(function(total, item) {
        return total + item;
    }, 0)
    return sum;
}

function nagative(arr) {
    let new_arr = arr.filter(function(item) {
        return item < 0;
    });
    return new_arr;
}

function order(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr;
}

function orderChange(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr;
}

function divibeTwo(arr) {
    let new_arr = [];
    arr.forEach(function(item, i) {
        new_arr.push(item / 2);
    });
    return new_arr;
}















// Task 2

const str = "12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964";

function translateNumbers(str) {
    let numbers = str.split(', ');
    return numbers;
}

function creatEvenNumbers(str) {
    let arr = translateNumbers(str);
    let new_arr = arr.filter(function(item) {
        return item % 2 == 0;
    });
    return new_arr;
}













// Task 3



const scheme = [
    ['name', 'Vasya'],
   
    ['age', 25],
   
    ['score', 95]
];



function makeObjectFromScheme(arr) {
    let obj = {};

    arr.forEach(function(item, i) {
        obj[item[0]] = item[1];
    });
    return obj;

}

















// Task 4



const scheme2 = {
    name: 'Vasya',
    age: 25,   
    score: 95
};

function makeArraysFromScheme(obj) {
    let arr = [];
    for(let value in obj) {
        arr.push([value, obj[value]]);
    }
    return arr;
}


