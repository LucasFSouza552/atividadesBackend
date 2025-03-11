enum Categoria {
    PERECIVEL,
    NAO_PERECIVEL
};

type Produto = {
    nome: string,
    preco: number,
    categoria: Categoria
};

function verificarDesconto(produto: Produto): number {
    if(produto.categoria === Categoria.PERECIVEL) {
        return produto.preco - produto.preco * 0.1;
    }
    return produto.preco;
}

const produto1: Produto = {
    nome: 'Lucas',
    preco: 300,
    categoria: Categoria.PERECIVEL
}
const produto2: Produto = {
    nome: 'Thiago',
    preco: 250,
    categoria: Categoria.NAO_PERECIVEL
}

console.log(verificarDesconto(produto1));
console.log(verificarDesconto(produto2));