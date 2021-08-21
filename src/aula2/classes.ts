export class Empresa {
    readonly nome: string; // public não necessario
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostraColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {}
}

const empresa1 = new Empresa("BMW", "504.731.128.76");
const colaborador1 = new Colaborador("Paulo", "Silva");
const colaborador2 = new Colaborador("Nathan", "Silva");
const colaborador3 = new Colaborador("Gabriele", "Silva");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostraColaboradores();
