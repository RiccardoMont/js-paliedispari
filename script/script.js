/* Esercizio parola palindroma */
const word = prompt('Inserisci una parola');

function palindrome(word){

    for(let i = 0, a = (word.length - 1); i < word.length, a >= 0; i++, a--){

        const normal_word = word[i];
        const reverse_word = word[a];

        if (normal_word != reverse_word){
            console.log('La parola inserita non è palindroma');
            return false;
        } 

        if (normal_word == reverse_word && a == 0){
            console.log('La parola inserita è palindroma!');
        }
        
    }

}

palindrome(word);


/*Esercizio pari e dispari*/


const gioca = document.getElementById('play');
const pcScore = document.getElementById('pcScore');
const totalScore = document.getElementById('totalScore');
const verdetto = document.getElementById('verdetto');



function pcHand(){

    const randomNumber = Math.floor(Math.random() * 5) + 1;
    pcScore.innerHTML = `${randomNumber}`;
    return randomNumber;

}


function somma(a, b){
    
    const evenOdd = document.getElementById('evenOdd').value;
    const result = a + b;

    totalScore.innerHTML = `${result}`;

    if(result % 2 == 0){
        
        if (evenOdd == 'pari'){

            verdetto.innerHTML = `<h1 class = 'text-success'>Il totale è pari!</h1>`

        } else {

            verdetto.innerHTML = `<h1 class = 'text-danger'>Il totale è pari!</h1>`

        }

    } else {

        if (evenOdd == 'pari'){

            verdetto.innerHTML = `<h1 class = 'text-danger'>Il totale è dispari!</h1>`

        } else {

            verdetto.innerHTML = `<h1 class = 'text-success'>Il totale è dispari!</h1>`

        }

    }

}


gioca.addEventListener('click', function(){

    const hand = Number(document.getElementById('hand').value);

    somma(hand, pcHand());

})

