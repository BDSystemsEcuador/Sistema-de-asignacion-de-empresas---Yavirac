export class Empresa {
    constructor(_id='',name='',direccion='',ubicacion='',correo='',celular='',telefono=''){
        this._id=_id;
        this.name=name;
        this.direccion=direccion;
        this.ubicacion=ubicacion;
        this.correo=correo;
        this.celular=celular;
        this.telefono=telefono;
    }
    _id:string;
    name:string;
    direccion:string;
    ubicacion:string;
    correo:string;
    celular:string;
    telefono:string;

}
