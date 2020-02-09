const express = require ('express');
const router = express.Router();
const emple = require('../controllers/tutor.controller');

router.get('/',emple.getTutores);
router.post('/',emple.createTutor);
router.get('/:id',emple.getTutor);
router.put('/:id',emple.putTutor);
router.delete('/:id',emple.deleteTutor);
module.exports = router;