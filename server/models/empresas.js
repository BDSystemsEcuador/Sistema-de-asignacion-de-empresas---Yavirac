const mongoose = require ('mongoose');
const {Schema} = mongoose;

const empresaSchema = new Schema ({
    name:{type: String, required:true},
    direccion:{type: String, required:false},
    ubicacion:{type: String, required:false},
    correo:{type: String, required:false},
    celular:{type: String, required:false},
    telefono:{type: String, required:false}
});

module.exports = mongoose.model('Empresa', empresaSchema );