const express = require ('express');
const router = express.Router();
const emple = require('../controllers/empleado.controller');

router.get('/',emple.getEmpleados);
router.post('/',emple.createEmpleado);
router.get('/:id',emple.getEmpleado);
router.put('/:id',emple.putEmpleado);
router.delete('/:id',emple.deleteEmpleado);
module.exports = router;