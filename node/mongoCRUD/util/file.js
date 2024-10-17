const fs = require('fs');

const borraArchivo = (filePath) => {
    fs.unlink(filePath,(err)=> {
        if (err){
            return res.send('Error al eliminar la imagen vieja');
        }
        else {
            console.log('La imagen se ha borrado con exito!')
        }
    })
}

module.exports = borraArchivo;