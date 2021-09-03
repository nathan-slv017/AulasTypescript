type FilterCallback = (
    value: unknown,
    index?: unknown,
    array?: unknown[]
) => boolean;

export function meuFilter(
    array: unknown[],
    callbackfn: FilterCallback
): unknown {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

const arrayFiltradoOriginal = array.filter((value) => value < 5);

const arrayFiltradoComMeuFilter = meuFilter(array, (value) => {
    if (typeof value === "number") return value < 5;
    return false;
});

// agr generics

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

const gArrayFiltrado = gMeuFilter(array, (value) => value > 5);
console.log(gArrayFiltrado);
