const fs = require('node:fs');

let ejemploFichero = (content) => {

    let directorioHome = process.env.HOME || process.env.HOMEPATH 
    let ruta = `${directorioHome}/test.txt`

    fs.writeFile(ruta, content, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
          console.log(`Archivo Guardado en ${ruta}`)
        }
      });
}

ejemploFichero("Contenido del fichero")
