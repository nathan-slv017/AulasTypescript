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
