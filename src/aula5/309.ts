export function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

export function isString(v: unknown): v is string {
    return typeof v === "string";
}

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
    return retorno;
}

console.log(soma(1, 2, 4));
console.log(soma(...[1, 2, 3, "a", "b", "c", 1]));
