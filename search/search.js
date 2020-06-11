const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const city = [];
fetch(endpoint)
    .then(x=>x.json())
    .then(x=>city.push(...x));


function findmatch(word,city){
    return city.filter(x=>{
        const tmp = new RegExp(word,'gi');
        return x.city.match(tmp) || x.state.match(tmp);
    });
}

let serchinput = document.querySelector('.searchinput');
let comp = document.querySelector('.comp');

function displaysearch(){
    let tmp = findmatch(this.value,city);
    if(this.value === ''){
        comp.innerHTML = '';

    }
    else{
        let htmlsearch = tmp.map(
            x=>{
                let name1 = new RegExp(this.value,'gi');
                let cityname  = x.city.replace(name1,`<span class = "name1">${this.value}</span>`);
                let statename  = x.city.replace(name1,`<span class = "name1">${this.value}</span>`);
               return`
                 <li>
                        <span class = "name">${cityname}</span>
                        <span class = "name">${statename}</span> 
                        <span class = "name">${x.population}</span> 
                    </li>
             `
         }
    ).join('');
    comp.innerHTML = htmlsearch;
    }
}

serchinput.addEventListener('keyup',displaysearch);
