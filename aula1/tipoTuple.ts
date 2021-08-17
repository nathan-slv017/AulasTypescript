// Tuple

const dadosCliente: [number, string] = [200, "Nathan"];
const dadosCliente2: [number, string, string] = [100, "henrrique", "Vitoria"];
const dadosCliente3: [number, string, string?] = [500, "Jonas"];

// para deixar a tuple imutavel tenho que usar readonly

const dadosCliente4: readonly [number, string] = [200, "Kaká"];

dadosCliente[0] = 100;
dadosCliente[1] = "Carlos";

// nao vai fincionar dadosCliente4[1] = 20;

// readonly array

const array1: readonly string[] = ["eletrico", "mecanico"];
const array2: ReadonlyArray<string> = ["lição 1", "lição 2"];

dadosCliente2[2] = "Santos";

console.log(dadosCliente);
