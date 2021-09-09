type Chapa = {
    candidato: string;
    votos: number;
};

export class Urna {
    private candidatos: Chapa[] = [];

    constructor(public descricao: string) {}

    cadastroDeCandidatos(chapa: Chapa): void {
        this.candidatos.push(chapa);
    }

    votar(voto: number): void {
        this.candidatos[voto].votos += 1;
    }

    apuracaoDaUrna(): void {
        for (const candidato of this.candidatos) {
            console.log(candidato.candidato + " votos:" + candidato.votos);
        }
    }
}

const votao2021 = new Urna("votação para presidente");
votao2021.cadastroDeCandidatos({ candidato: "paulin", votos: 0 });
votao2021.cadastroDeCandidatos({ candidato: "jorge", votos: 0 });
votao2021.votar(0);
votao2021.votar(0);
votao2021.votar(0);
votao2021.votar(0);
votao2021.votar(0);

votao2021.apuracaoDaUrna();
