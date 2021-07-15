const criarDados = document.getElementById('addDados');
const box = document.getElementById('box');
const dado1 = document.getElementById('dado1');
const dado2 = document.getElementById('dado2');
const somarOs2 = document.getElementById('somar');
const rodarOs2 = document.getElementById('rodar');
const boxResult = document.getElementById('boxResult');
const btnMil = document.getElementById('btnMil');

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

const addResult = (paran1) => {
    let countStr = paran1.toString();
    countStr = countStr.replace(',',':');
    let div = document.createElement('div');
    div.innerText = countStr;
    div.style.color = 'white';
    div.style.width = 20+paran1[1]+'px';
    div.style.border = "1px solid black";
    div.style.background = 'green';
    div.style.fontSize= '15px';
    div.style.textAlign= 'left';
    boxResult.appendChild(div);
}

const girarMil = () =>{
    boxResult.innerText="";

    let count = [[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];
    let soma = 0;
    for(let y = 0;y< 1000;y++){
        RodarOs2Dados()
        soma = result1+result2;
   
        for(let i = 0;i< count.length; i++){
            if(soma === count[i][0]){
                count[i][1]++
            }
            console.log(count)
        }
    }
    for(let i = 0; i < count.length;i++){
        addResult(count[i]);
    }
       
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
