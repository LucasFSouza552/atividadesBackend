// Calcula a média de um array de números
function calcularMedia(numeros: number[]): number {
    return numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));