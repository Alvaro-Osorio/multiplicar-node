const colors = require('colors');
const argv = require('./config/yargs').argv;

const { makeFile, listar } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log(listar(argv.base, argv.limite, 1));
        break;

    case 'crear':
        makeFile(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado'))
            .catch(e => console.log(e)).green;
        break;

    default:
        console.log('No exite comando');

}


// console.log('Limite', argv.limite);

// console.log(process.argv);

// let   argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];