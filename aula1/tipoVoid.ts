function semRetorno(...args: string[]): void {
    console.log(args.join(" "));
}

semRetorno("nathan", "silva");
const pessoa = {
    nome: "Luiz",
    sobrenome: "Otavio",
    exibirNome(): void {
        console.log(this.nome + " " + this.sobrenome);
    },
};

export { pessoa };
