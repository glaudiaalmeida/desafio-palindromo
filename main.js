// essaPalavraEUmPalindromo(); //hoisting = içamento -- chamamos a função antes mesmo de ela ser declarada.
// Essa é a function declaration

// function essaPalavraEUmPalindromo() {
//     let separandoAsLetras = palavra.split("");
    
//     let palavraInvertida = separandoAsLetras.reverse();
//     palavraInvertida = palavraInvertida.join("");

//     if (palavra == palavraInvertida) {
//         console.log(`A palavra ${palavra} é um palindromo!`);
//     } else {
//         console.log(`A palavra ${palavra} não é um palindromo!`);
//     }
// }

const essaPalavraEUmPalindromo = function(palavra) {
    let separandoAsLetras = palavra.split("");
    
    let palavraInvertida = separandoAsLetras.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palindromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um palindromo!`);
    }
}
essaPalavraEUmPalindromo("radar"); //function expression é colocada dentro de uma const e não aceita o hoisting (chamar a função antes de ser declarada.) 
