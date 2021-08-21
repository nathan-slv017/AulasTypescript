export function funcao(this: Date, argument1: string, age: number) {
    console.log(this);
    console.log(argument1, age);
}

// funcao.call(new Date(), "Nathan", 30);
funcao.apply(new Date(), ["Nathan", 30]);
