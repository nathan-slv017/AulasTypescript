export class Carro {
    private readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }
    para(): void {
        this.motor.para();
    }
    desligar(): void {
        this.motor.desligar();
    }
}

export class Motor {
    ligar(): void {
        console.log("Motor está ligando...");
    }
    acelerar(): void {
        console.log("Motor está acelerando...");
    }
    para(): void {
        console.log("Motor está parando...");
    }
    desligar(): void {
        console.log("Motor está desligando...");
    }
}

const carro = new Carro();
carro.acelerar();
carro.ligar();
