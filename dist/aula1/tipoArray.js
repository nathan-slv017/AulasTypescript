"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = exports.concatenaString = exports.multiplicaArgs = void 0;
function multiplicaArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
exports.multiplicaArgs = multiplicaArgs;
function concatenaString(...args) {
    return args.reduce((ac, value) => ac + value);
}
exports.concatenaString = concatenaString;
const result = multiplicaArgs(1, 2, 3, 4, 5);
const concatena = concatenaString("a", "b", "c");
function toUpperCase(...args) {
    return args.map((valor) => valor.toUpperCase());
}
exports.toUpperCase = toUpperCase;
const toUp = toUpperCase("n", "a", "t");
console.log(concatena);
console.log(toUp);
console.log(result);
//# sourceMappingURL=tipoArray.js.map