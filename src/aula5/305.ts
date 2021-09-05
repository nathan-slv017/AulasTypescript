interface PessoaProtocolo<T, U> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
    nome: "Nathan",
    sobrenome: "Silva",
    idade: 19,
};

const aluno2: PessoaProtocolo<number, string> = {
    nome: 123,
    sobrenome: 456,
    idade: "dezenove",
};
