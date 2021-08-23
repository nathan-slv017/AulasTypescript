export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected name: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagem: Personagem): void {
        console.log(`${this.name} está atacando`);
        this.bordao();
        return personagem.perderVida(this.name, this.ataque);
    }

    private perderVida(name: string, ataque: number): void {
        this.vida -= ataque;
        console.log(
            `${this.name} ${this.emoji} sofreu um ataque de ${name}, sua vida agora é de ${this.vida}`
        );
        console.log(" ");
    }
    abstract bordao(): void;
}

export class Guerreira extends Personagem {
    protected emoji = "\u{1F9DD}";

    bordao(): void {
        console.log(this.emoji + "Pikaaachuuuuu");
    }
}
export class Monstro extends Personagem {
    protected emoji = "\u{1F9DF}";
    bordao(): void {
        console.log(this.emoji + "charrr char");
    }
}

const pikachu = new Guerreira("pikachu", 110, 600);
const charmilhon = new Monstro("charmilhon", 80, 700);

pikachu.atacar(charmilhon);
pikachu.atacar(charmilhon);
charmilhon.atacar(pikachu);
