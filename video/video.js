let video1 = document.querySelector(".video1")
let videobody = document.querySelector(".videobody")
let p = document.querySelector(".main1");
let control = document.querySelector(".controlin");
let control1 = document.querySelector(".controlin1");

let main1 = document.querySelector(".main1");
let tenf = document.querySelector(".tenf");
let tenb = document.querySelector(".tenb");
let volume1 = document.querySelector(".volume");
let volumetmp = document.querySelector(".volume1");
let progress = document.querySelector(".progress");
let progress1 = document.querySelector(".progress1");
let full = document.querySelector(".full");
let head = document.querySelector(".head1");
let body1 = document.querySelector("body");














function p1(){
    if(video1.paused){
        video1.play();
        main1.textContent = '▮▮';
    }
    else{
        video1.pause();
        main1.textContent = '►';
    }
}
function tenf1(){
    video1.currentTime+=10;
}
function tenb1(){
    video1.currentTime-=10;
}
function volumey(){
    video1.volume= `0.${this.value}`;
}
function volumey1(){
    video1.playbackRate = `${this.value}`;
}
function update(){
    let value1 = (video1.currentTime/video1.duration)*100;
    progress1.style.flexBasis = `${value1}%`;
}
function update1(e){
    let value1 = (e.offsetX/progress.offsetWidth)*video1.duration;
    video1.currentTime=value1;

}
function full1(){
    if(videobody.style.width === `100vw`){
        videobody.style.width = `1080px`;
        videobody.style.height = `auto`;
        head.style.display = `flex`;
        body1.style.backgroundColor=`white`;

    }
    else{
        videobody.style.width = `100vw`;
        videobody.style.height = `98vh`;
        head.style.display = `none`;
        body1.style.backgroundColor=`black`;
    }
}

let mouse1  = false;
progress.addEventListener("mousedown",()=>(mouse1 = true));
progress.addEventListener("mouseup",()=>(mouse1 = false));
p.addEventListener("click",p1);
progress.addEventListener("click",update1);
progress.addEventListener("mousemove",(e)=>(mouse1 && update1(e)));
video1.addEventListener("click",p1);
video1.addEventListener("click",p1);
video1.addEventListener("timeupdate",update);
tenf.addEventListener("click",tenf1);
tenb.addEventListener("click",tenb1);
volume1.addEventListener("click",volumey);
volume1.addEventListener("change",volumey);
volume1.addEventListener("mousemove",volumey)
volumetmp.addEventListener("click",volumey1);
volumetmp.addEventListener("change",volumey1);
volumetmp.addEventListener("mousemove",volumey1);
full.addEventListener("click",full1);

videobody.addEventListener("mousemove",timeoutcontrol)








