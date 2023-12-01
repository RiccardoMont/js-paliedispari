
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