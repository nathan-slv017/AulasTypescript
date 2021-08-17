let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const;
const b = 100;

const person = {
    name: "Nathan" as const,
    lastName: "Silva",
};

function choiceColor(cor: "Amarelo" | "Vermelho" | "Azul") {
    return cor;
}

console.log(choiceColor("Amarelo"));

// Module mode
export default 1;
