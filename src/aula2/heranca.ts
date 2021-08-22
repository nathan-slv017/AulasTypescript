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

    getCod(): string {
        return this.cpf;
    }
    getNomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return "O nome do aluno é " + this.nome + " " + this.sobrenome;
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return "O nome do cliente é " + this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa("caio", "luiz", 11, "2");
const aluno = new Aluno("Jorge", "Silva", 14, "12232329871");
const cliente = new Cliente("Vinicius", "Knuth", 37, "4920482982");

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
