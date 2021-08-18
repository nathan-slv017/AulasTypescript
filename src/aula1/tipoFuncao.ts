type MapStringCallback = (item: string) => string;

function mapString(array: string[], callbackfn: MapStringCallback): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}

const abc = ["a", "b", "c", "d"];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
