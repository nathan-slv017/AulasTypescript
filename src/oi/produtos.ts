export class Produto {
    constructor(public nome: string, public preco: number) {}
}

export class CarrihnoDeCompras {
    private readonly produto: Produto[] = [];

    addProduto(produto: Produto): void {
        this.produto.push(produto);
    }

    isEmpyti(): boolean {
        return this.produto.length === 0;
    }
    mostrarProdutos(): void {
        for (const produto of this.produto) {
            console.log(produto.nome + " com o preco de R$:" + produto.preco);
        }
    }
    inserirVariosProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produto.push(produto);
        }
    }
}

const roupa = new Produto("Sapato", 100);
const blusa = new Produto("Blusa", 20);
const tapete = new Produto("Tapete", 90);

const meuCarrinhoDeCompras = new CarrihnoDeCompras();

meuCarrinhoDeCompras.inserirVariosProdutos(roupa, blusa, tapete);

meuCarrinhoDeCompras.mostrarProdutos();

/**
 * type MeuTipo = number;
 *
 * function minhaPromise(): Promise<MeuTipo> {
 * return new Promise((resolve, reject) =>{
 *      setTimeout(() =>{
 *      resolve(1)
 * }, 1000)
 * })}
 *
 * minhaPromise().then((value) => console.log(value + 1))
 *
 */

type CallBackfn = (value: unknown, index?: unknown, array?: unknown) => boolean;

export function meuFilter(array: unknown[], callbackfn: CallBackfn): unknown {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

type GFilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function gMeuFilter<T>(array: T[], callbackfn: GFilterCallback<T>): T[] {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
