const empresaCtrl ={};
const Empresa = require('../models/empresas')
empresaCtrl.getEmpresas= async (req,res)=>{
    const empresas = await Empresa.find()
    res.json(empresas);
};

empresaCtrl.getEmpresa= async (req,res)=>{
    //Empresa.findById();
    const empresa = await Empresa.findById(req.params.id);
    res.json(empresa);
};
empresaCtrl.putEmpresa= async (req,res, nexts)=>{
    const empresa = await{
        name:req.body.name,
        direccion: req.body.direccion,
        ubicacion: req.body.ubicacion,
        correo: req.body.correo,
        celular:req.body.celular,
        telefono:req.body.telefono
    }
    await Empresa.findByIdAndUpdate(req.params.id, {$set: empresa},{new: true})
    res.json({status:'empresa actualizado'})
};

empresaCtrl.createEmpresa = async (req,res)=>{
    const empresa= await new Empresa(
        {
            name:req.body.name,
            direccion: req.body.direccion,
            ubicacion: req.body.ubicacion,
            correo: req.body.correo,
            celular:req.body.celular,
            telefono:req.body.telefono

        }
    );
    await empresa.save();
    res.json({status:'empresa creado'});
};

empresaCtrl.deleteEmpresa = async (req, res, next)=>{
    await Empresa.findByIdAndRemove(req.params.id);
    res.json({status:'empresa eliminado'});
};

module.exports = empresaCtrl;