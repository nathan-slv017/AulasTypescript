export class Calculadora {
    constructor(public numero: number) {}

    add(numero: number): this {
        this.numero += numero;
        return this;
    }

    sub(numero: number): this {
        this.numero -= numero;
        return this;
    }

    div(numero: number): this {
        this.numero /= numero;
        return this;
    }

    mul(numero: number): this {
        this.numero *= numero;
        return this;
    }

    mostrarNumero(): void {
        console.log(this.numero);
    }
}

export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new SubCalculadora(10);
calculadora.add(10).div(2).mul(3).div(10).sub(1).pow(2);
calculadora.mostrarNumero();

// Builder - Gof

export class RequestBuilder {
    private method: "get" | "post" | null = null;
    private url: string | null = null;

    setMethod(method: "get" | "post"): this {
        this.method = method;
        return this;
    }

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder(); // Builder
request.setUrl("http://www.google.com").setMethod("post").send();
