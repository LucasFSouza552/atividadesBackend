enum cargo {
    GERENTE,
    FUNCIONARIO,
    ESTAGIARIO
};

type pessoa = {
    nome: string,
    cargo: cargo
};

function verificarGerencia(pessoa: pessoa): boolean {
    return pessoa.cargo === cargo.GERENTE;
}

const Pessoa1: pessoa = {
    nome: 'Lucas',
    cargo: cargo.GERENTE
}

const Pessoa2: pessoa = {
    nome: 'Thigo',
    cargo: cargo.FUNCIONARIO
}

console.log(verificarGerencia(Pessoa1));
console.log(verificarGerencia(Pessoa2));