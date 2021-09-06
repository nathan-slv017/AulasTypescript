// Record

const objeto1: Record<string, string | number> = {
    nome: "nathan",
    sobrenome: "silva",
    idade: 19,
    peso: 10,
};

type PessoaP = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};
// required

type PessoaRequired = Required<PessoaP>;

// partial

type PessoaPartil = Partial<PessoaRequired>;

// ReadOnly

type PessoaReadOnly = Readonly<PessoaRequired>;

// Pick

type PessoaPick = Pick<PessoaRequired, "nome" | "sobrenome">;

// Extract e Exclude

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

export default 1;
