function validarPalindromo(palavra: string): boolean {
    const Palavra = palavra.toLowerCase();
    return Palavra.split("").reverse().join("") === Palavra;
}


console.log(validarPalindromo("LapaL"));