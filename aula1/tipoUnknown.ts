let x: unknown;

x = 100;
x = "Luiz";
x = "10";
const y = 800;

if (typeof x === "number") console.log(x + y);
// O unknown é um any mais seguro
