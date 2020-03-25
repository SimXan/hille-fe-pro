// Task 1

let object = {a: 1, b: 2, c: 3};
let tar = {};
function copy(target, origin) {
    for (let property in origin) {
      target[property] = origin[property];
    }
    return target;
}

console.log(copy(tar, object));








// Task 2

function getNumberOfEven(n) {
    let newNumber = String(n);
    let score = 0;
    for(let i = 0; i < newNumber.length; i++) {
        if(newNumber[i] % 2 == 0) {
            score++;
        }
    }
    return score;
}

console.log(getNumberOfEven(223344)); // 4

console.log(getNumberOfEven(111)) // 0












// Task 3

function sumAll(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
} 

console.log(sumAll())// 0

console.log(sumAll(1)) // 1

console.log(sumAll(1, 2)) // 3












// Task 4


function mathMinMax(...args) {
    let new_arr = [];
    let min = args[0];
    let max = args[0];
    for(let i = 0; i < args.length; i++) {
        if(min > args[i]) {
            min = args[i];
        }
        if(max < args[i]) {
            max = args[i];
        }
    }
    new_arr.push(min, max);
    return new_arr;
} //- принимает любое кол-во аргументов и возвращает массив, в котором только два числа минимальное\максимальное из переданных в качестве аргументов.

console.log(mathMinMax(1, 2, 3, 4, 5)) // [1, 5]

console.log(mathMinMax(3, 4, 8, 5, 7, 2, 3, 0)) // [0, 8]