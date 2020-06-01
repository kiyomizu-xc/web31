let panels = document.querySelectorAll(".panel");

function toggleopen(){
    this.classList.toggle('open1');
}
function toggleopen1(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open');
    }
}
panels.forEach(x=>x.addEventListener('click',toggleopen));
panels.forEach(x=>x.addEventListener('transitionend',toggleopen1));

