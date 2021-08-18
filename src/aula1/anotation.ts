let nome: string = "Nathan";
let idade: number = 0b1010;
let adulto: boolean = true;
let simbolo: symbol = Symbol("qualquer-symbol");

// Array

let arrayOfNumber: Array<number> = [1, 2, 3];
let arrayOfStrings: Array<string> = ["Nathan", "joão", "pedro"];

let arrayOfNumbersTwo: number[] = [4, 5, 6];
let arrayOfStringsTwo: string[] = ["Denilson", "Paulo", "Jonas"];

// Objetos

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
    nome: "Nathan",
    idade: 19,
    adulto: true,
};

// function

function soma(x: number, y: number): number {
    return x + y;
}

const result = soma(2, 2);

const multiplica: (x: number, y: number) => number = (x, y) => x * y;

const novaIdade = 19 * 10;
