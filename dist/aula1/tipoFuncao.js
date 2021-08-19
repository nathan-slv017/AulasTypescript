"use strict";
function mapString(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
const abc = ["a", "b", "c", "d"];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
//# sourceMappingURL=tipoFuncao.js.map