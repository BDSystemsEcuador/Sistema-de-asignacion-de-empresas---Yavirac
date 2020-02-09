const mongoose = require ('mongoose');
const {Schema} = mongoose;

const empleadoSchema = new Schema ({
    names:{type: String, required:true},
    apellidos:{type: String, required:false},
    direccion:{type: String, required:false},
    ubicacion:{type: String, required:false},
    semestre:{type: String, required:false},
    correo:{type: String, required:false},
    celular:{type: String, required:false},
    telefono:{type: String, required:false}
});

module.exports = mongoose.model('Empleado', empleadoSchema );