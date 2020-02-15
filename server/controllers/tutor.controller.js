const tutorCtrl ={};
const Tutor = require('../models/tutores')
tutorCtrl.getTutores= async (req,res)=>{
    const tutores = await Tutor.find()
    res.json(tutores);
};

tutorCtrl.getTutor= async (req,res)=>{
    //Tutor.findById();
    const tutor = await Tutor.findById(req.params.id);
    res.json(tutor);
};
tutorCtrl.putTutor= async (req,res, nexts)=>{
    const tutor = await{
        name:req.body.name,
        apellidos:req.body.apellidos,
        direccion: req.body.direccion,
        ubicacion: req.body.ubicacion,
        correo: req.body.correo,
        celular:req.body.celular,
        telefono:req.body.telefono
    }
    await Tutor.findByIdAndUpdate(req.params.id, {$set: tutor},{new: true})
    res.json({status:'tutor actualizado'})
};

tutorCtrl.createTutor = async (req,res)=>{
    const tutor= await new Tutor(
        {
            name:req.body.name,
            apellidos:req.body.apellidos,
            direccion: req.body.direccion,
            ubicacion: req.body.ubicacion,
            correo: req.body.correo+'@yavirac.edu.ec',
            celular:req.body.celular,
            telefono:req.body.telefono

        }
    );
    await tutor.save();
    res.json({status:'tutor creado'});
};

tutorCtrl.deleteTutor = async (req, res, next)=>{
    await Tutor.findByIdAndRemove(req.params.id);
    res.json({status:'tutor eliminado'});
};

module.exports = tutorCtrl;