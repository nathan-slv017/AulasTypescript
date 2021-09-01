type CoresObj = typeof coresObj;
type CoresChave = keyof CoresObj;

const coresObj = {
    vermelho: "red",
    azul: "blue",
    verde: "green",
    roxo: "purple",
};

export function traduzCor(cor: CoresChave, cores: CoresObj) {
    return cores[cor];
}

console.log(traduzCor("verde", coresObj));
