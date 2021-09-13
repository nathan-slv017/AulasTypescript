type Constructor = new (...args: any[]) => any;

//Classes
function decoradorDeClasses(constructor: Constructor): any {
    // Chamado na criação da classe
    console.log("Classes");
    console.log(constructor);
    console.log("###");
}

// Método de instância (normal)
function decoradorDeMetodo(
    classPrototype: any,
    nomeDoMetodo: string,
    descritorDePropriedade: PropertyDescriptor
): any {
    // Chamado na criação do método (não precisa chamar o método)
    console.log("MÉTODO NORMAL");
    console.log(classPrototype);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log("###");
}

function decoradorDeMetodoEstatico(
    classPrototype: any,
    nomeDoMetodo: string,
    descritorDePropriedade: PropertyDescriptor
): any {
    // Chama na criação do método
    console.log("PARÁMETRO DE MÉTODO ESTÁTICO");
    console.log(classPrototype);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log("###");
}
