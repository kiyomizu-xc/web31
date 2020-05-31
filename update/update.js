let inputs = document.querySelectorAll(".controls input");


function handleinputs(){
    console.log(this.value);
    console.log(this.dataset);

    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(function(x){x.addEventListener('change',handleinputs)})
inputs.forEach(function(x){x.addEventListener('mousemove',handleinputs)})