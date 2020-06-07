function Popup(){
    this.modal = document.querySelector('.modal');
    this.content = document.querySelector('.content');
    this.overlay = document.querySelector('.overlay');
    this.btn_close = document.querySelector('.close');
    let popup = this;
    this.open = function(content){
        popup.content.innerHTML = content;
        popup.modal.classList.add('active');
        popup.overlay.classList.add('active');
        popup.modal.classList.add('mod');
    }

    this.close = function(){
        popup.modal.classList.remove('active');
    	popup.overlay.classList.remove('active');
    }
    this.overlay.onclick = popup.close;
    this.btn_close.onclick = popup.close;
}