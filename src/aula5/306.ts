// type ObterChaveFn = <O, K extends keyof O>(obejto: O, chave:k) => O[k]
// const obterChave: ObterChaveFn = (object, chave) => object[chave]

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
const obterChave: ObterChaveFn = (object, chave) => object[chave];

const animal = {
    cor: "amarelo",
    vacina: ["vc1", "vc2", "vc3"],
    numero: 1234,
    preco: 1000,
    nomes: ["alice", "paulo", 202],
};

const vacinas = obterChave(animal, "numero");
const numero = obterChave(animal, "numero");
const nomes = obterChave(animal, "nomes");

console.log(vacinas);
console.log(numero);
console.log(nomes);
