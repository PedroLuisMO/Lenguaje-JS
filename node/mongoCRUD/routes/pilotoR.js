const express = require('express');
const pilotoC = require('../controllers/pilotoC')

const router = express.Router();

router.get('/', pilotoC.homePage);
router.get('/agregar',pilotoC.getAgregar);
router.get('/editar/:id', pilotoC.getEditar);
router.get('/eliminar/:id', pilotoC.getEliminar);
router.post('/agregar', pilotoC.postAgregar);
router.post('/editar/:id', pilotoC.postEditar);


module.exports = router;
