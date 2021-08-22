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
//Super /\
//      ||

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string
    ) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }

    getNomeCompleto(): string {
        console.log("Fazendo algo antes");
        return super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        console.log("Tambem fazendo algo antes");
        const result = super.getNomeCompleto();
        return result + "Olha eu akiii";
    }
}

const pessoa = new Pessoa("caio", "luiz", 11, "2");
const aluno = new Aluno("Jorge", "Silva", 14, "12232329871", "001");
const cliente = new Cliente("Vinicius", "Knuth", 37, "4920482982");

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
