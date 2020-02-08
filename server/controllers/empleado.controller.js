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
    const empleado = {
        name:req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Empleado.findByIdAndUpdate(req.params.id, {$set: empleado},{new: true})
    res.json({status:'empleado actualizado'})
};

empleadoCtrl.createEmpleado = async (req,res)=>{
    const empleado= new Empleado(
        {
            name: req.body.name,
            position: req.body.position,
            office:req.body.office,
            salary:req.body.salary
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