// nameSpace

// eslint-disable "nome so protocolo"

namespace MeuNameSpace {
    export const nomeDoNameSpace = "nathan";
    export class PessoaDoNomeSpace {
        constructor(public nome: string) {}
    }
    const pessoa = new PessoaDoNomeSpace("nathan");
    // somente acessivel nesse escopo
}

const ppp = new MeuNameSpace.PessoaDoNomeSpace("nathan");

console.log(ppp);
console.log(MeuNameSpace.nomeDoNameSpace);
