// Сделайте табличку 3х3. Каждая ячейка должна быть заполнена случайным числом от 1 до 100. По клику на ячейку под таблицей должно выводиться число из ячейки. Все должно быть сделано JS-ом. Для обработки клика используйте делегирование - у вас должен быть один обработчик клика для этой таблицы.
// Task 1

$('.text').each(function(elem) {
    $(this).html(randNumber(0, 101));
})

$('.row').on('click', function() {
    $(this).children('.text').addClass('active');
})



function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}












// Используя jQuery сделайте аккордион. Разметка задается заранее в HTML. Функционал аккордиона должен быть реализован на jQuery.
// Task 2


$('.faq .ask').on('click', function(){
    let answer = $(this).next();
    
    $('.faq .answer:visible').not(answer).slideUp(400);
    answer.slideToggle(400);
});

