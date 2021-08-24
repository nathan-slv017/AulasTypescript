// export abstract class TipoPessoa {
//     protected abstract nome: string;
//     protected abstract sobrenome: string;
//     protected abstract nomeCompleto(): string;
// }

type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
};

type Idade = {
    idade: number;
};

export class Pessoa implements TipoPessoa, Idade {
    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number
    ) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa("Nathan", "Silva", 19);
console.log(pessoa.nomeCompleto());
