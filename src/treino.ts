type meuTipoDeObjeto = {
    nome: string;
    meusDado: number[];
    possivel?: boolean;
};

type meuNovoType = { nome: string; number: number; isTrue: boolean };

let meunome: string = "puoiio";
let minhaIdade: number = 30;
let eVerdade: boolean = true;
let meuNovoSymbol: symbol = Symbol("esse é o symbol");

// Arrays

const arrayOfNumbers: number[] | string[] = [1, 2, 3, 89];
const arrayOfString: string[] = ["juju", "petoo"];
const outroArray: [number, string?] = [10];

// Object

let meuNovoObjeto: meuNovoType = {
    nome: "nathan",
    number: 90,
    isTrue: false,
};

let outroObjetoCriado: meuTipoDeObjeto = {
    meusDado: [10, 20, 30, 40],
    nome: "nathan",
};

type TemUmNome = { nome: string };
type TemUmSobrenome = { sobreNome: string };
type TemUmaIdade = { idade: number };

type TemUmaPessoa = TemUmNome & TemUmSobrenome & TemUmaIdade;

const Perfil: TemUmaPessoa = { idade: 20, nome: "Nathan", sobreNome: "silvs" };

type color1 = "azul" | "amarelo" | "rosa";
type color2 = "ciano" | "caramelo" | "pink";
type color3 = "cinza" | "blue" | "black";

type EscolherCor = color1 | color2 | color3;

type MinhaPessoa = {
    name: string;
    idade: number;
    corPreferiada?: EscolherCor;
};

export function minhaPessoa(
    pessoa: MinhaPessoa,
    cor: EscolherCor
): MinhaPessoa {
    return { ...pessoa, corPreferiada: cor };
}

const pp: MinhaPessoa = {
    name: "nathan",
    idade: 19,
};

const novaPessoa = minhaPessoa(pp, "pink");

console.log(novaPessoa);

export function concatThis(...args: string[]): string {
    return args.reduce((ac, value) => ac + value);
}

const body = document.querySelector("body") as HTMLBodyElement;

body.style.backgroundColor = "red";

type MapStringCallbackk = (item: string) => string;

function mapString(array: string[], callback: MapStringCallbackk) {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callback(item));
    }
    return newArray;
}

const meuArray = ["a", "b", "c"];
const meuNovoArray = mapString(meuArray, (item) => item.toUpperCase());

console.log(meuNovoArray);

function criaErro(): never {
    throw new Error("qualquer erro");
}

// criaErro();

const obbA: {
    readonly chaveA: string;
    chaveB: string;
} = { chaveA: "nathan", chaveB: "paulo" };

obbA.chaveB = "3232";

let x: unknown;
