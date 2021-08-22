export class Pessoa1 {
    constructor(
        private nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ) {}

    setCpf(value: string): void {
        this.cpf = value;
    }

    getCpf(): string {
        return this.cpf.replace(/\D/g, "");
    }
}

const p1 = new Pessoa1("Nathan", "Silva", 19, "504.731.128-76");
p1.setCpf("12=--34456605");
console.log(p1.getCpf());

export class Pessoa2 {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string
    ) {}

    set cpf(value: string) {
        this._cpf = value;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, "");
    }
}

const p2 = new Pessoa2("João", "Correia", 20, "349.573.845-35");
p2.cpf = "112.122.112-79";
console.log(p2.cpf);
