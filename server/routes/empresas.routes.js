const express = require ('express');
const router = express.Router();
const emple = require('../controllers/empresa.controller ');

router.get('/',emple.getEmpresas);
router.post('/',emple.createEmpresa);
router.get('/:id',emple.getEmpresa);
router.put('/:id',emple.putEmpresa);
router.delete('/:id',emple.deleteEmpresa);
module.exports = router;