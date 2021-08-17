export enum Cores {
    VERMELHO = 10, // 0
    AZUL = 100, // 1
    AMARELO = 200, // 2
}

export enum Cores {
    ROXO = "ROXO",
    ROSA = "papa",
    EPI = 1,
}

function escolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaACor(Cores.VERMELHO);

console.log(Cores.VERMELHO);
console.log(Cores.AMARELO);
console.log(Cores[100]);
console.log(Cores.ROXO);
