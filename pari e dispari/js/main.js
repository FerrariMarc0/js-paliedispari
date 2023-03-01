'use strict';

let userNum= Number(prompt('inserisci un numero da 1 a 5'));

const randomNum= random(1, 5);
const result= numberSum(`Per un totale di ${userNum} + ${randomNum}`);

logUser(userNum);
logRandom(randomNum);
console.log(result);

if(userNum < randomNum){
    alert('HAI PERSO! RITENTA.');
    console.log('hai perso');
} else if(randomNum < userNum){
    alert('COMPLIMENTI, HAI VINTO!');
    console.log('hai vinto');
} else{
    alert("IL RISULTATO E' PARI...GIOCA DI NUOVO!");
    console.log('pareggio');
}