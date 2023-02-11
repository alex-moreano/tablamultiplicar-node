const fs = require('fs');
let colors = require('colors');

const crearArchivo = async(base=5, listar, hasta)=>{
    try {
        let salida='';
        console.clear();
        if(listar){
            console.log('============================'.rainbow);
            console.log(`        TABLA DEL ${base}`.rainbow);
            console.log('============================'.rainbow);
            for (let index = 0; index <= hasta; index++) {
                salida += `${base} ${'x'.green} ${index} = ${index*base}\n`;    
            }
        }
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
        console.log(salida);
        return (`tabla-${base}.txt creado`.underline.blue);
    } catch (error) {
        throw error;
    }
    
};

module.exports={
    crearArchivo
}