

let prova = 0

let aggiungi = document.querySelector('#aggiungi');
let togli = document.querySelector('#togli');


aggiungi.addEventListener("click", function () {
   
    let contatore = document.querySelector('#output');
    let result = Number(contatore.innerText) + 1;
    contatore.innerText = result


});

togli.addEventListener("click", function () {
   
    let contatore = document.querySelector('#output');
    let result = Number(contatore.innerText) - 1;
    if (result < 0) {result = 0;}
    contatore.innerText = result



});







