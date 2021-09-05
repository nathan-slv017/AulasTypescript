function unirObj<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
    return { ...obj1, ...obj2 };
    // return Object.assign({}, obj1, obj2)
}

const obj1 = { chave1: "chave1" };
const obj2 = { chave2: "chave2" };

const obj3 = unirObj(obj1, obj2);

console.log(obj3);
