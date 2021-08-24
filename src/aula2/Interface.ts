type Nome = {
    nome: string;
};

type Sobrenome = {
    sobrenome: string;
};

type nomeCompleto = {
    nomeCompleto(): string;
};

type Idade = {
    idade: number;
};

type TipoPessoa = Nome & Sobrenome & nomeCompleto & Idade;

export class Pessoa implements TipoPessoa {
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
