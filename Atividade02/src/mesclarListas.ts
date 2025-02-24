function mesclarListar(array1: number[], array2: number[]): number[] {
    const result = new Set([...array1, ...array2]);
    return Array.from(result);
}

console.log(mesclarListar([1, 2, 3, 4], [3, 4, 5, 6]))