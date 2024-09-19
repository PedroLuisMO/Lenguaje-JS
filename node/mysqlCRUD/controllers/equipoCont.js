const db = require('../util/basedatos');

exports.homePage = async (req,res,next) => {
    [rows,fields] = await db.execute('SELECT * FROM infoEquipos');
    res.render('visualizar', {
        rows
    })
}

exports.getAgregar = (req,res,next) => {
    res.render('agregar');
}

exports.getEditar = async (req,res,next) => {
    const id = req.params.id;
    [row,fields] = await db.execute('SELECT * from infoEquipos where id = ?', [id]);
    if (row)
    {
        res.render('editar', {
            rows: row[0]
        });
    }
}


exports.postAgregar = async (req,res,next) => {
    const nombre = req.body.team;
    const ciudad = req.body.city;
    const pais = req.body.country;
    const estadio = req.body.stadium;
    const fundacion = req.body.founded;
    result = await db.execute('INSERT INTO infoEquipos (nombre,pais,ciudad,estadio,anio) VALUES (?,?,?,?,?)', [nombre,pais,ciudad,estadio,fundacion])
    if (result)    
        res.redirect('/');
    else 
    {
        msg = "Error al hacer el insert";
        res.render('error', {
            msg
        });
    }
}

exports.postEditar = async (req,res,next) => {
    const id = req.params.id;
    const nombre = req.body.team;
    const ciudad = req.body.city;
    const pais = req.body.country;
    const estadio = req.body.stadium;
    const fundacion = req.body.founded;
    result = await db.execute('UPDATE infoEquipos SET nombre=?, pais=?,ciudad=?,estadio=?,anio=? WHERE id=?',[nombre,pais,ciudad,estadio,fundacion,id]);
    if (result)
        res.redirect('/');
    else 
    {
        msg = "Error al hacer el update";
        res.render('error',{
            msg
        })
    }
}

exports.getEliminar = async (req,res,next) => {
    const id = req.params.id;
    result = await db.execute('DELETE FROM infoEquipos WHERE id=?',[id]);
    if(result)
            res.redirect('/');
    else 
    {
        msg = 'Error al hacer delete';
        res.render('error',{
            msg
        })
    }
}