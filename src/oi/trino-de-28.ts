export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ) {}

    getIdade(): number {
        return this.idade;
    }
    getNomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
    getCod(): string {
        return this.cpf;
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return "Nome do aluno(a) é " + this.nome + " " + this.sobrenome;
    }
}

export class Empregado extends Pessoa {
    getNomeCompleto(): string {
        return "Nome do empregado(a) é " + this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa("Nathan", "Silva", 19, "102910290102");
console.log(pessoa.getNomeCompleto());

const aluno = new Aluno("Vitoria", "Ana", 17, "1039039292");
console.log(aluno.getNomeCompleto());

const empregado = new Pessoa("Matheus", "Ribeiro", 22, "39023992839");
console.log(empregado.getNomeCompleto());
