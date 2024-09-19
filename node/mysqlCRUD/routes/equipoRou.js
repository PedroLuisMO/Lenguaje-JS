const equipoCont = require('../controllers/equipoCont');
const express = require('express');

const router = express.Router();

router.get('/', equipoCont.homePage);
router.get('/agregar', equipoCont.getAgregar);
router.get('/editar/:id', equipoCont.getEditar);
router.get('/eliminar/:id', equipoCont.getEliminar);
router.post('/agregar', equipoCont.postAgregar);
router.post('/editar/:id', equipoCont.postEditar);


module.exports =router;