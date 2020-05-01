// Task 1

let btns = document.querySelectorAll('button');
let j = 0;
let i = 0;
let row = document.querySelector('.row');
let table = document.querySelector('.table');
let scores = document.querySelectorAll('.score');

scores.forEach(function(item) {
    item.textContent = j;
})




// Это первый вариант решения 1 задачи


btns.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let currentTarget = e.currentTarget;
        let div_score = this.parentNode.querySelector('.score');
        let i = +div_score.textContent;
        if(currentTarget.innerHTML === '+') {
            i++;
        } else if(currentTarget.innerHTML === '-') {
            i--;
        }
        div_score.textContent = i;
    })
})







// Это второй вариант решения 1 задачи

/*
btns.forEach(function(item) {
    item.addEventListener('click', function() {
        let div_score = this.parentNode.querySelector('.score');
        let i = +div_score.textContent;
        if(this.classList.contains('plus')) {
            i++;
        } else if(this.classList.contains('minus')) {
            i--;
        }
        div_score.textContent = i;
        
    })
})
*/









// Это третий вариант решения 1 задачи

/*
btns.forEach(function(item) {
    item.addEventListener('click', function() {
        let div_score = this.parentNode.querySelector('.score');
        let i = +div_score.textContent;
        if(this.hasAttribute('data-plus')) {
            i++;
        } else if(this.hasAttribute('data-minus')) {
            i--;
        }
        div_score.textContent = i;
        
    })
})
*/









// Это четвертый вариант решения 1 задачи

/*
row.addEventListener('click', function(e) {
    let i = null;
    let target = e.target;
    let div_score = null;
    if(target.classList.contains('plus')) {
        div_score = target.parentNode.querySelector('.score');
        i = +div_score.textContent;
        i++;
    } else if(target.classList.contains('minus')) {
        div_score = target.parentNode.querySelector('.score');
        i = +div_score.textContent;
        i--;
    }

    if(div_score !== null) {
        div_score.textContent = i;
    }

})


*/

















// Task 2

// Я не понял что должен был сделать, и поэтому решил двумя способами 

let url = 'https://ithillel.ua/?utm_source=%D0%9A%D0%B0%D1%80%D0%BB%20%D1%83%20%D0%9A%D0%BB%D0%B0%D1%80%D1%8B%20%D1%83%D0%BA%D1%80%D0%B0%D0%BB%20%D0%BA%D0%BE%D1%80%D0%B0%D0%BB%D0%BB%D1%8B&utm_medium=,%20%D0%B0%20%D0%9A%D0%BB%D0%B0%D1%80%D0%B0%20%D1%83%20%D0%9A%D0%B0%D1%80%D0%BB%D0%B0%20%D1%83%D0%BA%D1%80%D0%B0%D0%BB%D0%B0%20%D0%BA%D0%BB%D0%B0%D1%80%D0%BD%D0%B5%D1%82.&utm_campaign=%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0%20%D0%9A%D0%BB%D0%B0%D1%80%D0%B0%20%D0%BA%D0%B0%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0&utm_term=%D0%9A%D0%B0%D1%80%D0%BB%D0%B0%20%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%80%D0%B0%D0%BB%D0%B0&utm_content=%D0%B7%D0%B0%20%D0%BA%D1%80%D0%B0%D0%B6%D1%83%20%D0%BA%D0%BE%D1%80%D0%B0%D0%BB%D0%BB%D0%BE%D0%B2';

function makeObjFromQuery(url) {
    let obj = {};
    let decode_url = decodeURIComponent(url);
    tab = decode_url.indexOf('?');
    decode_url = decode_url.slice(tab);
    decode_url = new URLSearchParams(decode_url);
    for(let [key, value] of decode_url) {
        obj[key] = value;
    }
    return obj;
}


// let url = location.search;
    
// function makeObjFromQuery(url) {
//     let obj = {};
//     decode_url = url.slice(1);
//     let url_array = decode_url.split('&').map(function(item) {
//         return item.split('=');
//     });
//     url_array.forEach(function(item) {
//         obj[item[0]] = decodeURIComponent(item[1]);
//     })
//     return obj;
// }

let obj = makeObjFromQuery(url);


function printData(obj) {
    let table = '<table>';

    for(let key in obj) {
        table += '<tr>';
        table += `<td>${key}</td>`;
        table += `<td>${obj[key]}</td>`;
        table += '</tr>';
    }
    table += '</table>';
    return table;
}

table.innerHTML = printData(obj);


