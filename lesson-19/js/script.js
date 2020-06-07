// Task 1


function Fizzbuzz(n) {
    for(let i = 1; i <= n; i++) {
        if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log('fizzbuzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        } 
        else {
            console.log(i);
        }
    }
}

// Fizzbuzz(30);

















// Task 2


function filterCharacter(str) {
    let count = 0;
    let character = ['a', 'e', 'u', 'i', 'o'];
    character.forEach(elem => {
        for(let i = 0; i < str.length; i++) {
            if(elem === str[i]) {
                count++;
            }
        }
    })
    // character.forEach(element => {
    //     element = element.toLowerCase();
    //     if(str.toLowerCase().indexOf(element) != -1) {
    //         count++;
    //     }
    // })
    return count;
}

























// Task 3

function fibanachi(n) {
    return n <= 1 ? n : fibanachi(n - 1) + fibanachi(n - 2);
}

// function fibanachi(n) {
//     let next = 1;
//     let prev = 1;
//     for (let i = 3; i <= n; i++) {
//         let temp = next;
//         next = next + prev;
//         prev = temp;
//     }
//     return next;
//   }

console.log(fibanachi(5));