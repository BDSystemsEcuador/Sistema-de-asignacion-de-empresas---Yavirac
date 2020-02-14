export class Estudiante {
    constructor(_id='',names='',apellidos='',direccion='',ubicacion='Sin Ubicación', semestre='',correo='',celular='',telefono='',empresa='Sin empresa'){
        this._id=_id;
        this.names=names;
        this.apellidos=apellidos;
        this.direccion=direccion;
        this.ubicacion=ubicacion;
        this.semestre=semestre;
        this.correo=correo;
        this.celular=celular;
        this.telefono=telefono;
        this.empresa=empresa;
    }
    _id:string;
    names:string;
    apellidos: string;
    direccion:string;
    ubicacion:string;
    semestre:string;
    correo:string;
    celular:string;
    telefono:string;
    empresa:string;
}
