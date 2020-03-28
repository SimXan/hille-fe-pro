// Task 1

let boxes = document.querySelectorAll('.box');
let row = document.querySelector('.row');
// let i = 0;
boxes.forEach(function(item) {
    item.addEventListener('click', function() {
        
        // 2 Эта вторая вариация решения задания
        // if(i % 3 === 0) {
        //     this.style.background = 'blue'
        // } else if(i % 3 === 1) {
        //     this.style.background = 'green';
        // } else if(i % 3 === 2) {
        //     this.style.background = 'yellow';
        // }

        // i++;

        if(this.classList.contains('blue')) {
            this.classList.remove('blue');
            this.classList.add('green');
        }
        else if(this.classList.contains('green')) {
            this.classList.remove('green');
            this.classList.add('yellow');
        }
        else {
            this.classList.remove('yellow');
            this.classList.add('blue');
        }
        
        this.remove();
        row.appendChild(this);
    })
})














// Task 2


function toggleClass(elem, cls) {
    elem.classList.toggle(cls);
}