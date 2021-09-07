type VotationOption = {
    numberOfvotes: number;
    option: string;
};

export class Votation {
    private _votationOptions: VotationOption[] = [];
    constructor(public details: string) {}

    addVotationOption(votationOption: VotationOption): void {
        this._votationOptions.push(votationOption);
    }

    vote(votationIndex: number): void {
        this._votationOptions[votationIndex].numberOfvotes += 1;
    }

    get votationOptions(): VotationOption[] {
        return this._votationOptions;
    }
}

export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showResolts(): void {
        for (const votation of this.votations) {
            console.log(votation.details);
            for (const votationOptions of votation.votationOptions) {
                console.log(
                    votationOptions.option +
                        " recebel " +
                        votationOptions.numberOfvotes +
                        " votos"
                );
            }
            console.log("###");
            console.log("");
        }
    }
}

const votacaoCorPreferida = new Votation("Votação de cores preferidas");
votacaoCorPreferida.addVotationOption({ option: "azul", numberOfvotes: 0 });
votacaoCorPreferida.addVotationOption({ option: "amarelo", numberOfvotes: 0 });
votacaoCorPreferida.addVotationOption({ option: "pink", numberOfvotes: 0 });
votacaoCorPreferida.addVotationOption({ option: "marrom", numberOfvotes: 0 });

votacaoCorPreferida.vote(0);

const votacaoLinguaPreferida = new Votation("Votação de linguas preferida");
votacaoLinguaPreferida.addVotationOption({
    option: "ingles",
    numberOfvotes: 0,
});
votacaoLinguaPreferida.addVotationOption({
    option: "alemao",
    numberOfvotes: 0,
});
votacaoLinguaPreferida.addVotationOption({
    option: "portugues",
    numberOfvotes: 0,
});

votacaoLinguaPreferida.vote(0);

const votacoes = new VotationApp();
votacoes.addVotation(votacaoCorPreferida);
votacoes.addVotation(votacaoCorPreferida);
votacoes.showResolts();
