import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  closeResult: string;
  constructor(private empleadoService:EmpleadoService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getEmpleados();
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  addEmpleado(form:NgForm){

    if(form.value._id){
      this.empleadoService.putEmpleado(form.value).
      subscribe (res => {
        this.resetForm(form);
        this.getEmpleados();
      }); 
    } else {
      this.empleadoService.addEmpleado(form.value).
      subscribe(res => {
        this.resetForm(form);
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
      });
  }

}
}
