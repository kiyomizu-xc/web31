let add1 = document.querySelector(".add");
let menu = document.querySelector(".menu");


let item1 = JSON.parse(localStorage.getItem('items'))|| [];




function osaka(e){
    e.preventDefault();
    let text1 = this.querySelector("[name  = item]").value;
    console.log("osaka -> text1", text1);
    let item = {
        text1,
        ok:false,
    };
    item1.push(item);
    osakapush(item1,menu);
    localStorage.setItem("items",JSON.stringify(item1));
    add1.reset();
}
function osakapush(itemx,bepushed){
    bepushed.innerHTML = item1.map((x,xindex)=>{
        return `

            <li>
                <input type="checkbox" data-index="${xindex}" id="item${xindex}" ${x.ok?'checked':''}>
                <label for="item${xindex}">${x.text1}</label>
            </li>
        `;
    }).join('');
}
function okStorage(e){
    if(!e.target.matches('input'))return;
    let ex = e.target;
    let tmp = ex.dataset.index;
    item1[tmp].ok = !item1[tmp].ok;
    osakapush(item1,menu);
    localStorage.setItem("items",JSON.stringify(item1));
}


osakapush(item1,menu);



add1.addEventListener("submit",osaka);
menu.addEventListener("click",okStorage);