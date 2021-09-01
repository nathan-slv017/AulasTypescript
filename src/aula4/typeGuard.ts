export function add(a: unknown, b: unknown): number | string {
    return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
}

console.log(add(1, 7));
console.log(add("a", "r"));

type Pessoa = { tipo: "pessoa"; nome: string };
type Animal = { tipo: "animal"; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    tipo: "pessoa" = "pessoa";
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
    // if ("nome" in obj) console.log(obj.nome);
    if (obj instanceof Aluno) console.log(obj.nome);
    switch (obj.tipo) {
        case "pessoa":
            console.log(obj.nome);
            return;
        case "animal":
            console.log(obj.tipo, obj.cor);
            return;
    }
}

mostraNome(new Aluno("Joao"));
mostraNome({ tipo: "animal", cor: "preto" });
