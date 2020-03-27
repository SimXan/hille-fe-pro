// Task 1

let boxes = document.querySelectorAll('.box');
let row = document.querySelector('.row');
boxes.forEach(function(item) {
    item.addEventListener('click', function() {
        
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
        let $this = this;
        item.remove();
        row.appendChild($this);
    })
})














// Task 2


function toggleClass(elem, cls) {
    elem.classList.toggle(cls);
}