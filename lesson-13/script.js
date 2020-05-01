// Task 1




let div = document.querySelector('.container');
let text = document.querySelector('.text');
function printData(letter) {
    let div = '';
    for(let i = 0; i < letter.length; i++) {
        div += '<div class="letter">';
        div += letter[i];
        div += '</div>';
    }
    div += '<div class="shift letter">';
    div += 'Shift';
    div += '</div>';
    div += '<div class="clear letter">';
    div += 'Clear';
    div += '</div>';
    div += '<div class="back letter">';
    div += 'BackSpace';
    div += '</div>';

    return div;
}



let symbols = '`!@#$%^&*()_+qwertyuiop[]asdfghjkl;"zxcvbnm,./';
let message = printData(symbols);

text.innerHTML = message;

let shift = document.querySelector('.shift');

document.querySelectorAll('.letter').forEach(function(item) {
    item.addEventListener('click', function() {
        if(this.classList.contains('clear')) {
            div.innerHTML = '';
        } else if(this.classList.contains('shift')) {
            this.classList.toggle('active');
        } else if(this.classList.contains('back')) {
            let cont = div.innerHTML;
            div.innerHTML = cont.substring(0, cont.length - 1);
        } else {
            if(shift.classList.contains('active')) {
                let content = this.innerHTML.toUpperCase();
                div.innerHTML += content;

            } else {
                let content = this.innerHTML;
                div.innerHTML += content;
            }
        }
        
    })
})









// 2. Сделайте калькулятор валют. Должны быть след поля:

// выбрать операцию (продажа, покупка) [radio]
// валюта из [select]
// валюта в [select]
// сумма [input]
// поле для вывода результата [input]


// Валюты для конвертации: USD, EUR, UAH.



// В квадратных скобках указан тип элемента формы, кот нужно использовать
let eur_sale = 29.3;
let eur_purchase = 29.8;
let usd_sale = 26.8; 
let usd_purchase = 27.35;
let uah = 1;




function moneyConverter(obj) {
    let output = document.querySelector(obj.outPut);
    let input = document.querySelector(obj.input);
    let currencyFrom = document.querySelector(obj.currencyFrom);
    let currencyIn = document.querySelector(obj.currencyIn);
    let operation = document.querySelectorAll(obj.oper);
    let selec = document.querySelectorAll(obj.selec);

    input.addEventListener('input', function() {
        if(operation[0].checked) {
            saleFromInput();
        }
        else if(operation[1].checked) {
            purchaseFromInput();
        }

        
    })


    output.addEventListener('input', function() {
        let i = currencyFrom.selectedIndex;
        let j = currencyIn.selectedIndex;
        let curFrom = currencyFrom.options[i].text;
        let curIn = currencyIn.options[j].text;
        
        if(operation[0].checked) {
            if(curFrom === 'USD' && curIn === 'UAH') {
                input.value = this.value * uah / usd_sale;
            } else if(curFrom === 'USD' && curIn === 'EUR') {
                input.value = this.value * eur_sale / usd_sale;
            } else if(curFrom === 'USD' && curIn === 'USD') {
                input.value = this.value * usd_sale / usd_sale;
            } else if(curFrom === 'UAH' && curIn === 'EUR') {
                input.value = this.value * eur_sale / uah;
            } else if(curFrom === 'UAH' && curIn === 'UAH') {
                input.value = this.value * uah / uah;
            } else if(curFrom === 'UAH' && curIn === 'USD') {
                input.value = this.value * usd_sale / uah;
            } else if(curFrom === 'EUR' && curIn === 'UAH') {
                input.value = this.value * uah / eur_sale;
            } else if(curFrom === 'EUR' && curIn === 'EUR') {
                input.value = this.value * eur_sale / eur_sale;
            } else if(curFrom === 'EUR' && curIn === 'USD') {
                input.value = this.value * usd_sale / eur_sale;
            }
        }
        else if(operation[1].checked) {
            if(curFrom === 'USD' && curIn === 'UAH') {
                input.value = this.value * uah / usd_purchase;
            } else if(curFrom === 'USD' && curIn === 'EUR') {
                input.value = this.value * eur_purchase / usd_purchase;
            } else if(curFrom === 'USD' && curIn === 'USD') {
                input.value = this.value * usd_purchase / usd_purchase;
            } else if(curFrom === 'UAH' && curIn === 'EUR') {
                input.value = this.value * eur_purchase / uah;
            } else if(curFrom === 'UAH' && curIn === 'UAH') {
                input.value = this.value * uah / uah;
            } else if(curFrom === 'UAH' && curIn === 'USD') {
                input.value = this.value * usd_purchase / uah;
            } else if(curFrom === 'EUR' && curIn === 'UAH') {
                input.value = this.value * uah / eur_purchase;
            } else if(curFrom === 'EUR' && curIn === 'EUR') {
                input.value = this.value * eur_purchase / eur_purchase;
            } else if(curFrom === 'EUR' && curIn === 'USD') {
                input.value = this.value * usd_purchase / eur_purchase;
            }   
        }  
    })


    operation.forEach(function(item) {
        item.addEventListener('change', function() {
            if(this.value === 'sale') {
                saleFromInput();
            }
            else if(this.value === 'purchase') {
                purchaseFromInput();
            }
        })
    })


    selec.forEach(function(item) {
        item.addEventListener('change', function() {
            if(operation[0].checked) {
                saleFromInput();
            }
            else if(operation[1].checked) {
                purchaseFromInput();
            }
        })
    })
    


    function saleFromInput() {
        let i = currencyFrom.selectedIndex;
        let j = currencyIn.selectedIndex;
        let curFrom = currencyFrom.options[i].text;
        let curIn = currencyIn.options[j].text;

        if(curFrom === 'USD' && curIn === 'UAH') {
            output.value = input.value * usd_sale / uah;
        } else if(curFrom === 'USD' && curIn === 'EUR') {
            output.value = input.value * usd_sale / eur_sale;
        } else if(curFrom === 'USD' && curIn === 'USD') {
            output.value = input.value * usd_sale / usd_sale;
        } else if(curFrom === 'UAH' && curIn === 'EUR') {
            output.value = input.value * uah / eur_sale;
        } else if(curFrom === 'UAH' && curIn === 'UAH') {
            output.value = input.value * uah / uah;
        } else if(curFrom === 'UAH' && curIn === 'USD') {
            output.value = input.value * uah / usd_sale;
        } else if(curFrom === 'EUR' && curIn === 'UAH') {
            output.value = input.value * eur_sale / uah;
        } else if(curFrom === 'EUR' && curIn === 'EUR') {
            output.value = input.value * eur_sale / eur_sale;
        } else if(curFrom === 'EUR' && curIn === 'USD') {
            output.value = input.value * eur_sale / usd_sale;
        }
    }


    function purchaseFromInput() {
        let i = currencyFrom.selectedIndex;
        let j = currencyIn.selectedIndex;
        let curFrom = currencyFrom.options[i].text;
        let curIn = currencyIn.options[j].text;

        if(curFrom === 'USD' && curIn === 'UAH') {
            output.value = input.value * usd_purchase / uah;
        } else if(curFrom === 'USD' && curIn === 'EUR') {
            output.value = input.value * usd_purchase / eur_purchase;
        } else if(curFrom === 'USD' && curIn === 'USD') {
            output.value = input.value * usd_purchase / usd_purchase;
        } else if(curFrom === 'UAH' && curIn === 'EUR') {
            output.value = input.value * uah / eur_purchase;
        } else if(curFrom === 'UAH' && curIn === 'UAH') {
            output.value = input.value * uah / uah;
        } else if(curFrom === 'UAH' && curIn === 'USD') {
            output.value = input.value * uah / usd_purchase;
        } else if(curFrom === 'EUR' && curIn === 'UAH') {
            output.value = input.value * eur_purchase / uah;
        } else if(curFrom === 'EUR' && curIn === 'EUR') {
            output.value = input.value * eur_purchase / eur_purchase;
        } else if(curFrom === 'EUR' && curIn === 'USD') {
            output.value = input.value * eur_purchase / usd_purchase;
        }
    }
    
}

moneyConverter({
    oper: '.operation',
    currencyFrom: '#currency-from',
    currencyIn: '#currency-in',
    input: '#input-money',
    outPut: '#output',
    selec: '.selec'
})
