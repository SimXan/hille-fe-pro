// Task 1

let students = [
    {
        name: "Petro",
        age: '1993-08-22',
        sex: "male"
    },
    {
        name: "Tania",
        age: '1973-05-17',
        sex: "famale"
    },
    {
        name: "Sasha",
        age: '1999-11-12',
        sex: "male"
    },
    {
        name: "Daria",
        age: '1988-02-07',
        sex: "famale"
    },
    {
        name: "Maria",
        age: '1997-09-15',
        sex: "famale"
    },
];


function getAverageAge(arr) {
    let middle = 0;
    for(let i = 0; i < arr.length; i++) {
        let bathrday = new Date(arr[i].age).getFullYear();
        let age = new Date().getFullYear() - bathrday;
        middle += age;
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
        new_arr[i] = arr[i];
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

function filter(arr, isEven) {
    let even_arr = [];
    for(let i = 0; i < arr.length; i++) {
        if(isEven(arr[i])) {
            even_arr[i] = arr[i];
        }
    }
    return even_arr;
}

console.log(filter(arr2, isEven)); // [2, 4, 6]


