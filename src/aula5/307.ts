class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

export class Stack<T> {
    private counter = 0;
    private elements: { [k: number]: T } = {};

    push(element: T): void {
        this.elements[this.counter] = element;
        this.counter++;
    }

    pop(): T | void {
        if (this.isEmpyt()) return undefined;
        this.counter--;
        const element = this.elements[this.counter];
        delete this.elements[this.counter];
        return element;
    }

    isEmpyt(): boolean {
        return this.counter === 0;
    }

    showStack(): void {
        for (const chave in this.elements) {
            console.log(chave);
        }
    }
}

const pilha = new Stack<number>();
pilha.push(1);
pilha.push(2);
pilha.push(2);
pilha.push(2);
pilha.pop();

while (!pilha.isEmpyt()) {
    console.log(pilha.pop());
}
