// Array <T> = T[]

export function multiplicaArgs(...args: Array<number>) {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, value) => ac + value);
}

const result = multiplicaArgs(1, 2, 3, 4, 5);
const concatena = concatenaString("a", "b", "c");

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const toUp = toUpperCase("n", "a", "t");

console.log(concatena);
console.log(toUp);
console.log(result);
