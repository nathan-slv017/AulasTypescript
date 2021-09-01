type Veiculo = {
    marca: string;
    ano: number;
};

type Car = {
    brand: Veiculo["marca"];
    year: Veiculo["ano"];
    name: string;
};

const myCar: Car = {
    brand: "BWM",
    year: 1200,
    name: "paulo",
};
