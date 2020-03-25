// Task 1

let students = [
    {
        name: "Petro",
        age: 31,
        sex: "male"
    },
    {
        name: "Tania",
        age: 48,
        sex: "famale"
    },
    {
        name: "Sasha",
        age: 16,
        sex: "male"
    },
    {
        name: "Daria",
        age: 15,
        sex: "famale"
    },
    {
        name: "Maria",
        age: 24,
        sex: "famale"
    },
];

function getAverageAge(arr) {
    let middle = 0;
    for(let i = 0; i < arr.length; i++) {
        middle += arr[i].age;
    }
    middle /= arr.length;
    return middle;
}

function checkMostGender(arr) {
    let male = 0;
    let famale = 0;
    let sex = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].sex == 'male') {
            male += 1;
        } else {
            famale += 1;
        }
    }
    if(male > famale) {
        sex = 'male';
    } else {
        sex = 'famale';
    }
    return sex;
}
console.log(getAverageAge(students));
console.log(checkMostGender(students));











// Task 2

let arr1 = [1,2,3,4,5,6];


function clone(arr) {
    let new_arr = [];
    for(let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i]);
    }
    return new_arr;
}
let brr = clone(arr1);

console.log(brr); // [1,2,3,4,5,6]

brr[0] = 42;

console.log(brr); // [42,2,3,4,5,6]

console.log(arr1); // [1,2,3,4,5,6]





// Task 3

let arr2 = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 === 0;
} // проверяет на четность

function filter(arr, flag) {
    let even_arr = [];
    for(let i = 0; i < arr.length; i++) {
        if(flag(arr[i])) {
            even_arr.push(arr[i]);
        }
    }
    return even_arr;
}

console.log(filter(arr2, isEven)); // [2, 4, 6]