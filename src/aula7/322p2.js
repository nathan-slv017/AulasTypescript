// nameSpace
// eslint-disable "nome so protocolo"
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nomeDoNameSpace = "nathan";
    var PessoaDoNomeSpace = /** @class */ (function () {
        function PessoaDoNomeSpace(nome) {
            this.nome = nome;
        }
        return PessoaDoNomeSpace;
    }());
    MeuNameSpace.PessoaDoNomeSpace = PessoaDoNomeSpace;
    var pessoa = new PessoaDoNomeSpace("nathan");
    // somente acessivel nesse escopo
})(MeuNameSpace || (MeuNameSpace = {}));
var ppp = new MeuNameSpace.PessoaDoNomeSpace("nathan");
console.log(ppp);
console.log(MeuNameSpace.nomeDoNameSpace);
/// <reference path="321.ts"/>
// mudar sistema de modulo para AMD e outfile(/)
console.log(MeuNameSpace.nomeDoNameSpace);

export default 1
