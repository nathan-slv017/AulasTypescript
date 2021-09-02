// Encadeamento opcional e Operador de coalescência nula

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: "O titulo",
    texto: "O texto",
    // data: new Date(),
};

console.log(documento.data?.toDateString() ?? "Ixi, não existe data");
console.log(undefined ?? "Nao valor");
console.log(null ?? "Nao valor");
console.log("" ?? "n");
console.log(0 ?? "n");
console.log(false ?? "n");
