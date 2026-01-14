const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');

router.post('/tareas', tareasController.crearTarea);

module.exports = router;
