enum Nivel {
    BASICO,
    INTERMEDIARIO,
    AVANCADO
};

type Curso = {
    nome: string,
    duracaoHoras: number,
    nivel: Nivel
};

type CursoComDesconto = Curso & {
    desconto?: number
};

function CalcularPreco(curso: CursoComDesconto): number {
    let precoInicial: number = curso.duracaoHoras * 10;
    if (curso.desconto) {
        precoInicial -= curso.desconto / 100;
    }

    switch (curso.nivel) {
        case Nivel.AVANCADO:
            precoInicial += precoInicial * (10 / 100);
            break;
        case Nivel.BASICO:
            precoInicial += precoInicial * (2 / 100);
            break;
        case Nivel.INTERMEDIARIO:
            precoInicial += precoInicial * (6 / 100);
            break;
        default:
            console.log("Indefinido!")
            break;
    }

    return precoInicial;
}

const cursoDesconto: CursoComDesconto = {
    nome: "ADS",
    duracaoHoras: 10,
    nivel: Nivel.BASICO
};

console.log(CalcularPreco(cursoDesconto));