// 1. Вам нужно, написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором — суммирует переданый параметр с тем, что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

function Sum() {
    let res = 0;
    return function(a) {
        res += a;
        return res;
    };
}

let sum = Sum();

console.log(sum(3));
console.log(sum(11));
console.log(sum(-7));


















// 2. Это не все. Возьмите счетчик, который мы писали в классе и добавьте ему возможность задавать начальное значение и шаг счетчика и отчистку.


let plusBtn = document.querySelector('.plus');
let stopBtn = document.querySelector('.stop');

function score(start = 0, step = 1) {
    let count = start;
    
    return function(clear) {
        if(clear === 'clear') {
            count = start;
            return count;
        }
        count += step;
        return count;
    }
}

let plusScore = score(5, 5);



plusBtn.addEventListener('click', function() {
    console.log(plusScore());
});

stopBtn.addEventListener('click', function() {
    console.log(plusScore('clear'));
});








// 3. Рекурсия. Поработаем с числовым палиндромом) Числовой палиндром — это натуральное число, которое читается слева направо и справа налево одинаково. Иначе говоря, отличается симметрией записи (расположения цифр), причём число знаков может быть как чётным, так и нечётным.

// Но!

// Палиндром можно получить как результат операций над другими числами. Возьмём любое натуральное число и сложим его с обращённым числом, то есть записанным теми же цифрами, но в обратном порядке. Проделаем то же действие с получившейся суммой и будем повторять его до тех пор, пока не образуется палиндром. Иногда достаточно сделать всего один шаг (например, 312 + 213 = 525), но, как правило, требуется не менее двух. Скажем, число 96 порождает палиндром 4884 только на четвёртом шаге....


// Это решение без рекурсий
// function palidrom(n) {
//     let flag = true;
//     let res = 0;
//     let inverted = n.toString().split('').reverse().join('');
//     let count = n.toString();

//     if(inverted === count) {
//         res = +inverted + +count;
//         flag = false;
//     }

//     while(flag) {
//         res = parseInt(inverted) + parseInt(count);
//         inverted = res.toString().split('').reverse().join('');
//         count = res.toString();
//         if(inverted === count) {
//             flag = false;
//         }
//     }
//     return res;
// }


function palidrom(n) {
    let inverted = n.toString().split('').reverse().join('');
    let count = n.toString();
    let res = +count + +inverted;

    return count === inverted ? n : palidrom(res);
}

console.log("Полидром числа 96: " + palidrom(96));

console.log("Полидром числа 598: " + palidrom(598));