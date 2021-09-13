type Constructor = new (...args: any[]) => any;

function inverteNomeCor(v1: string, v2: string) {
    //Closure

    return function <T extends Constructor>(target: T): T {
        console.log("Sou o decorador e recebi ", target);

        return class extends target {
            cor: string;
            nome: string;

            constructor(...args: any[]) {
                super(...args);
                this.nome = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);
            }

            inverte(valor: string) {
                return valor.split("").reverse().join("") + v1 + " " + v2;
            }
        };
    };
}

function outroDecorador(param1: string) {
    return function (target: Constructor) {
        console.log("sou o outro decorador" + " " + param1);
        return target;
    };
}

@outroDecorador("outro parametro")
@inverteNomeCor("valor1", "valor2")
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log("Sou a classe");
    }
}

const n = new Animal("as", "bd");
console.log(n);
