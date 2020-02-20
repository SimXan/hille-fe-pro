let name = prompt('Введите ваше имя');
let age = prompt('Введите вашь возраст');

let approve = confirm(name  + ' Употребляете алкоголь ?')

if (approve) {
    if (age >= 40)
    {
 alert (name + ' Незлоупотребляйте');
    }
   else if (age < 18)
   {
       alert (name + ' Ты что?! Маме расскажу!');
   }
   else if (age >= 18 && age < 40) 
    {
       alert (name + ' Только водку с пивом не мешай...');
    }
}
   else {
    alert ('Так держать!')
    }