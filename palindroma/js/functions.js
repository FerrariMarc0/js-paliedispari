'use stricts';

function palindrome(text){

    for(let i = 0; i < userWord.length / 2; i++){
        
        if(userWord[i] !== userWord[userWord.length - 1 - i]){
           return 'NON è una parola palindroma';
        } 
            return "E' una parola palindroma";
    }
    }