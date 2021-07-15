const criarDados = document.getElementById('addDados');
const box = document.getElementById('box');
const dado1 = document.getElementById('dado1');
const dado2 = document.getElementById('dado2');
const somarOs2 = document.getElementById('somar');
const rodarOs2 = document.getElementById('rodar');
const boxResult = document.getElementById('boxResult');
const btnMil = document.getElementById('btnMil');

// =======;====================
let div2 ;
let div3 ;
let div4 ;
let div5 ;
let div6 ;
let div7 ;
let div8 ;
let div9 ;
let div10 ;
let div11 ;
let div12 ;

let dois = 0;
let tres = 0;
let quatro = 0
let cinco = 0;
let seis = 0;
let sete = 0;
let oito = 0;
let nove = 0;
let dez = 0;
let onze = 0;
let doze= 0;

// ===========================================================

let result1 = 1;
let result2 = 1;
const girarDado1 = () =>{
    result1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dado1.innerText= result1;
    return result1;
}
const girarDado2 = () =>{
    result2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dado2.innerText= result2;
    return result2;
}
const SomarOs2Dados = () => {
    let soma = result1 + result2;
    boxResult.innerText=soma;
    boxResult.style.textAlign='center';
    boxResult.style.fontSize= '25px'
    return soma;
}
const RodarOs2Dados = () => {
   girarDado1();
   girarDado2();
}

const addResult = (span, paran1) => {
    let li = document.createElement('li');
    span = document.createElement("span");
    span.innerText = paran1;
    span.style.color = 'white';
    li.style.width = 20+paran1 +'px';
    li.style.border = "1px solid black";
    li.style.background = 'green';
    li.style.fontSize= '15px';
    li.style.textAlign= 'left';
    li.appendChild(span);
    boxResult.appendChild(li);
}

const girarMil = () =>{
    boxResult.innerText="";


dois = 0;
tres = 0;
quatro = 0;
cinco = 0;
seis = 0;
sete = 0;
oito = 0;
nove = 0;
dez = 0;
onze = 0;
doze= 0;

    let count = [];    
    for(let i = 0; i < 1000; i++){
        RodarOs2Dados()
        count.push(result1+result2);
    }
    for(let i = 0; i < count.length; i++){
        if(count[i]===2){
            dois++;
        }else if(count[i]===3){
            tres++;
        }else if(count[i]===4){
            quatro++;
        }else if(count[i]===5){
            cinco++;
        }else if(count[i]===6){
            seis++;
        }else if(count[i]===7){
            sete++;
        }else if(count[i]===8){
            oito++;
        }else if(count[i]===9){
            nove++;
        }else if(count[i]===10){
            dez++;
        }else if(count[i]===11){
            onze++;
        }else {
            doze++
        }
    }
    addResult(div2,dois);
    addResult(div3,tres);
    addResult(div4,quatro);
    addResult(div5,cinco);
    addResult(div6,seis);
    addResult(div7,sete);
    addResult(div8,oito);
    addResult(div9,nove);
    addResult(div10,dez);
    addResult(div11,onze);
    addResult(div12,doze);
}
// ===========================================================

btnMil.addEventListener('click', girarMil);
somarOs2.addEventListener('click', SomarOs2Dados);
rodarOs2.addEventListener('click',RodarOs2Dados)
dado1.addEventListener('click', girarDado1);
dado2.addEventListener('click', girarDado2);
criarDados.addEventListener('click', function(){
  box.style.display = 'block' ;
})
