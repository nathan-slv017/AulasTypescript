export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    mostrarMinhasCompras(): void {
        for (const { nome, preco } of this.produtos) {
            console.log(nome + " no valor de " + preco + " reais");
        }
    }

    inserirVariosProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }

    quantidadeDeProdutos(): Number {
        return this.produtos.length;
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("camiseta", 100);
const produto2 = new Produto("Sofa", 20);
const produto3 = new Produto("Caminhão", 10000);

const meuCarrinho = new CarrinhoDeCompras();

meuCarrinho.inserirVariosProdutos(produto1, produto2, produto3);

meuCarrinho.mostrarMinhasCompras();
console.log(meuCarrinho.valorTotal());
console.log(meuCarrinho.quantidadeDeProdutos());
