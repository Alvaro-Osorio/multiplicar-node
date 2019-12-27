const fs = require('fs');




let listar = (base, limite, num) => {

    let cad = base + 'x' + num + '=' + base * num;
    if (num < limite) {
        return cad + '\n' + listar(base, limite, (num + 1));
    } else {
        return cad;
    }
};



let makeFile = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let multiplicar = (base, num) => {

            let cad = base + 'x' + num + '=' + base * num;
            if (num < limite) {
                return cad + '\n' + multiplicar(base, (num + 1));
            } else {
                return cad;
            }
        };

        let datos = multiplicar(base, 1);

        fs.writeFile(`tablas/tabla ${base}.txt`, datos, (err) => {

            if (err)
                reject(err);
            else
                resolve(` The file table ${base} has been saved!`);
        });

    });
}

module.exports = {
    makeFile,
    listar
}