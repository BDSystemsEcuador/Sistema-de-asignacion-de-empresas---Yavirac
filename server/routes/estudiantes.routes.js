const express = require ('express');
const router = express.Router();
const emple = require('../controllers/estudiante.controller');

router.get('/',emple.getEstudiantes);
router.post('/',emple.createEstudiante);
router.get('/:id',emple.getEstudiante);
router.put('/:id',emple.putEstudiante);
router.delete('/:id',emple.deleteEstudiante);
module.exports = router;