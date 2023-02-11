const {crearArchivo} = require('./helpers/multiplicar.js');

const argv = require('./config/yargs.js');

crearArchivo(argv.base, argv.listar, argv.hasta)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));