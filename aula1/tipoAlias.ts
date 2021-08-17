type Idade = number;

type Pessoa = {
    nome: string;
    idade: Idade;
    salario: Number;
    corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type corPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
    idade: 30,
    nome: "Nathan",
    salario: 1000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, "Preto"));
