



let sec = document.querySelector('.sec-hand');
let min = document.querySelector('.min-hand');
let hour = document.querySelector('.hour-hand');

function setdate(){
    let now = new Date();
    let seconds = now.getSeconds();
    let seconddeg = seconds*6;
    sec.style.transform = `rotate(${seconddeg+90}deg)`; 

    let mins = now.getMinutes();
    let mindeg = mins*6;
    min.style.transform = `rotate(${mindeg+90}deg)`;

    let hours = now.getHours();
    let hourdeg = hours*30;
    hour.style.transform = `rotate(${hourdeg+90}deg)`;
}








setInterval(setdate,1000);