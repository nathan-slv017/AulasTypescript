// Declaration me

interface Pessoa {
    readonly nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
    readonly idade?: number | string;
}

export const pessoa: Pessoa = {
    nome: "Nathan",
    sobrenome: "Silva",
    enderecos: ["Av Brasil"],
};

console.log(pessoa);
