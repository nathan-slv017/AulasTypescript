export class Pessoa {
    static idadePadrao: number = 0;
    static cpfPadrao: string = "000.000.000-00";

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string
    ) {}

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(
            nome,
            sobrenome,
            Pessoa.idadePadrao,
            Pessoa.cpfPadrao
        );
    }

    static metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}

const pessoa1 = new Pessoa("Luiz", "Miranda", 30, "120.332.331-99");
const pessoa2 = Pessoa.criaPessoa("Marcos", "Silva");
console.log(pessoa1);
console.log(pessoa2);
