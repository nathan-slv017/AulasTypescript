function decorador3(classPrototype: any, nome: string | symbol): any {
    console.log(classPrototype);
    console.log(nome);

    let v: any;
    return {
        get: () => v,
        set: (value: any) => {
            v = value.split("").reverse().join("");
        },
    };
}

function decorator(
    classPrototype: any,
    nomeMethod: string | symbol,
    index: number
): any {
    console.log(classPrototype);
    console.log(nomeMethod);
    console.log(index);
}

function decorador(
    classPrototype: any,
    nomeMetodo: string,
    descriptor: PropertyDescriptor
): any {
    console.log(classPrototype);
    console.log(nomeMetodo);
    console.log(descriptor);
    return {
        value: function (...args: any) {
            return args[0].toUpperCase();
        },
    };
}

export class UmaPessoa {
    @decorador3
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decorador
    memes(@decorator msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg} `;
    }

    get nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(" ");
    }
}

const pessoa = new UmaPessoa("Nathan", "Silva", 19);
const method = pessoa.memes("paulim");
console.log(method);
console.log(pessoa.nomeCompleto);
