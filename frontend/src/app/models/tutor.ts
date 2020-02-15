export class Tutor {
    constructor(_id='',names='',apellidos='',direccion='',ubicacion='',correo='',celular='',telefono=''){
        this._id=_id;
        this.names=names;
        this.apellidos=apellidos;
        this.direccion=direccion;
        this.ubicacion=ubicacion;
        this.correo=correo;
        this.celular=celular;
        this.telefono=telefono;
    }
    _id:string;
    names:string;
    apellidos: string;
    direccion:string;
    ubicacion:string;
    correo:string;
    celular:string;
    telefono:string;

}
