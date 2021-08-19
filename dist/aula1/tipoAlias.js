"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
const pessoa = {
    idade: 30,
    nome: "Nathan",
    salario: 1000,
};
function setCorPreferida(pessoa, cor) {
    return { ...pessoa, corPreferida: cor };
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(pessoa, "Preto"));
//# sourceMappingURL=tipoAlias.js.map