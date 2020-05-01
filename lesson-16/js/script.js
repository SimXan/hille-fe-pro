// Task 1

$('.plus').on('click', function() {
    let score = parseInt($(this).parent().children('.score').html());
    score++;
    $(this).parent().children('.score').html(score);
})


$('.minus').on('click', function() {
    let score = parseInt($(this).parent().children('.score').html());
    score--;
    $(this).parent().children('.score').html(score);
})
















// Task 2




let boxes = $('.box');
let container = $('.container');
// let i = 0;
$('.container .box').each(function(index, elem) {

    elem.addEventListener('click', function() {

        if($(this).hasClass('blue')) {
            $(this).removeClass('blue');
            $(this).addClass('green');
        }
        else if($(this).hasClass('green')) {
            $(this).removeClass('green');
            $(this).addClass('yellow');
        }
        else {
            $(this).removeClass('yellow');
            $(this).addClass('blue');
        }
        
        $(this).remove();
        container.append($(this));
    })
})
