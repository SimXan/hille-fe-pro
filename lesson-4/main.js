var figure = "*";
var number = prompt('Сколько будет занимать по размеру треугольник?',5);
var triangle = ""
for(var i = 0; i < number; i++) {
    for(var j = 0; j <= i; j++) {
        triangle += figure;
    }
    triangle += '\n';
}

console.log(triangle);