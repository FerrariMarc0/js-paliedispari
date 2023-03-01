'use strict';

function logUser(log){
    console.log(userNum);
    return logUser;
}

function logRandom(log){
    console.log(randomNum);
    return logRandom;
}

function random(min, max){
    return Math.round(Math.random() * (max - min) +1);
}

function numberSum(x, y){
    let sum= userNum + randomNum;
    if(oddEven % 2 === 0){
        alert('PARI');
    } else {
        alert('DISPARI');
    }
    
    return sum;
}