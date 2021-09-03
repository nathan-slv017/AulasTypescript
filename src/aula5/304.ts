type MeuTipo = number;

function minhaPromise(): Promise<MeuTipo> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

minhaPromise().then((value) => console.log(value + 1));
