const estudianteCtrl ={};
const Estudiante = require('../models/estudiantes')
estudianteCtrl.getEstudiantes= async (req,res)=>{
    const estudiantes = await Estudiante.find()
    res.json(estudiantes);
};

estudianteCtrl.getEstudiante= async (req,res)=>{
    //Estudiante.findById();
    const estudiante = await Estudiante.findById(req.params.id);
    res.json(estudiante);
};
estudianteCtrl.putEstudiante= async (req,res, nexts)=>{
    const estudiante = await{
        names:req.body.names,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        ubicacion: req.body.ubicacion,
        semestre: req.body.semestre,
        correo: req.body.correo +'@yavirac.edu.ec',
        celular:req.body.celular,
        telefono:req.body.telefono,
        empresa:req.body.empresa
    }

    
    await Estudiante.findByIdAndUpdate(req.params.id, {$set: estudiante},{new: true})
    res.json({status:'estudiante actualizado'})
};


estudianteCtrl.createEstudiante = async (req,res)=>{
    const estudiante= await new Estudiante(
        {
            names: req.body.names,
            apellidos: req.body.apellidos,
            direccion: req.body.direccion,
            ubicacion: req.body.ubicacion,
            semestre: req.body.semestre,
            correo: req.body.correo +'@yavirac.edu.ec',
            celular:req.body.celular,
            telefono:req.body.telefono,
            empresa:req.body.empresa

        }
    );
    await estudiante.save();
    res.json({status:'estudiante creado'});
};

estudianteCtrl.deleteEstudiante = async (req, res, next)=>{
    await Estudiante.findByIdAndRemove(req.params.id);
    res.json({status:'estudiante eliminado'});
};

module.exports = estudianteCtrl;