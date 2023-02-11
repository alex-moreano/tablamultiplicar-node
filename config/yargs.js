const argv = require('yargs')
            .option("b", {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Toma la base de la tabla de multiplicar'
            })
            .check((argv, options)=>{
                if(isNaN(argv.base)){
                    throw 'La base debe ser un numero';
                }
                return true;
            })
            .option("l", {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option("h",{
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Limite de la tabla de multiplicar'
            })
            .argv;


module.exports = argv;