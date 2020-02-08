import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
declare var M: any;
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }
  addEmpleado(form:NgForm){

    if(form.value._id){
      this.empleadoService.putEmpleado(form.value).
      subscribe (res => {
        this.resetForm(form);
        M.toast({html: 'actualizado correctamente'});
        this.getEmpleados();
      }); 
    } else {
      this.empleadoService.addEmpleado(form.value).
      subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'guardado correctamente'});
        this.getEmpleados();
      });
    }
  }
  getEmpleados(){
    this.empleadoService.getEmpleados().
    subscribe(res=>{
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    })
  }
  resetForm(form?:NgForm){
    if (form){
      form.reset();
      this.empleadoService.seleccionarEmpleado = new Empleado();
      this.getEmpleados();
  }
}
editEmpleado(empleado: Empleado){
  this.empleadoService.seleccionarEmpleado = empleado;

}
deleteEmpleado(empleado: Empleado){
  if(confirm('seguro deseas eliminarlo?')){
    this.empleadoService.deleteEmpleado(empleado)
      .subscribe(res => {
        this.getEmpleados();
        M.toast({html: 'Deleted Succesfully'});
      });
  }

}
}
