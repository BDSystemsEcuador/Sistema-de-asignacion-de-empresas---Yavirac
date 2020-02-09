const empleadoCtrl ={};
const Empleado = require('../models/empleados')
empleadoCtrl.getEmpleados= async (req,res)=>{
    const empleados = await Empleado.find()
    res.json(empleados);
};

empleadoCtrl.getEmpleado= async (req,res)=>{
    //Empleado.findById();
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
};
empleadoCtrl.putEmpleado= async (req,res, nexts)=>{
    const empleado = await{
        names:req.body.names,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        ubicacion: req.body.ubicacion,
        semestre: req.body.semestre,
        correo: req.body.correo,
        celular:req.body.celular,
        telefono:req.body.telefono
    }
    await Empleado.findByIdAndUpdate(req.params.id, {$set: empleado},{new: true})
    res.json({status:'empleado actualizado'})
};

empleadoCtrl.createEmpleado = async (req,res)=>{
    const empleado= await new Empleado(
        {
            names: req.body.names,
            apellidos: req.body.apellidos,
            direccion: req.body.direccion,
            ubicacion: req.body.ubicacion,
            semestre: req.body.semestre,
            correo: req.body.correo,
            celular:req.body.celular,
            telefono:req.body.telefono

        }
    );
    await empleado.save();
    res.json({status:'empleado creado'});
};

empleadoCtrl.deleteEmpleado = async (req, res, next)=>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({status:'empleado eliminado'});
};

module.exports = empleadoCtrl;