// Verifica se um número é primo
function verificarPrimo(numero: number): boolean {
    let count: number = 0;
    for (let i: number = 1; i <= numero && count <= 2; i++) {
        if (numero % i == 0) {
            count++;
        }
    }
    return count <= 2;
}


console.log(verificarPrimo(2));
console.log(verificarPrimo(3));
console.log(verificarPrimo(4));
