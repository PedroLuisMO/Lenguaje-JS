const Piloto = require('../models/piloto');
const deleteFile = require('../util/file');

exports.homePage = async (req,res,next) =>{
    const drivers = await Piloto.find();
    res.render('visualizar', {
        pilotos: drivers
    });
}

exports.getAgregar = (req,res,next) => {
    res.render('agregar');
}

exports.getEditar = async (req,res,next) => {
    const id = req.params.id;
    const driver = await Piloto.findById(id);
    res.render('editar', {
        piloto: driver
    });
}

exports.postAgregar = async (req,res,next) => {
    const nombre = req.body.nombre;
    const  nacionalidad = req.body.nacionalidad;
    const escuderia = req.body.escuderiaActual;
    const victorias = req.body.victorias;
    const image = req.file;
    if (!image) {
        return res.send('ERROR en imagen')   
    }
    else 
    {
        const imageDir = image.path;
        const driver = new Piloto ({
            nombre: nombre,
            nacionalidad: nacionalidad,
            escuderia: escuderia,
            victorias: victorias,
            foto: imageDir
        })
        const agregaR = await driver.save();
        if (agregaR)
            res.redirect('/');
        else 
            res.send('Error');
    }
}

exports.postEditar = async (req,res,next) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const nacionalidad = req.body.nacionalidad;
    const escuderia = req.body.escuderia;
    const victorias = req.body.victorias;
    const rutaAnterior = req.body.oldImageName;
    const image = req.file;
    if (!image){
        return res.send('ERROr en imagen editar');
    } else {
        const imageDir = image.path;
        deleteFile(rutaAnterior);
        const updateR = await Piloto.findByIdAndUpdate (id,{
            nombre:nombre,
            nacionalidad: nacionalidad,
            escuderia: escuderia,
            victorias: victorias,
            foto: imageDir
        })
        if (updateR)
            res.redirect('/')
    }
}

exports.getEliminar = async (req,res,next) => {
    id = req.params.id;
    let deleteR = await Piloto.findById(id);
    deleteFile(deleteR.foto);
    deleteR = await Piloto.deleteOne({_id:id})
    if (deleteR)
            res.redirect('/');
}