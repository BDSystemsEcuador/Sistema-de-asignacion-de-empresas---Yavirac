import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import {EstudianteService} from '../estudiantes/estudiante.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {EmpresaService} from '../empresas/empresa.service';
import { Empresa } from '../models/empresa';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css'],
  providers:[EstudianteService]
})
export class AsignacionComponent implements OnInit {
  closeResult: string;

  constructor(private empresaService:EmpresaService,private estudianteService:EstudianteService,private modalService: NgbModal) { }
  ngOnInit() {
    this.getEstudiantes();
    this.getEmpresas();
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  getEmpresas(){
    this.empresaService.getEmpresas().
    subscribe(res=>{
      this.empresaService.empresas = res as Empresa[];
      console.log(res);
    })
  }
  addEstudiante(form:NgForm){

    if(form.value._id){
      this.estudianteService.putEstudiante(form.value).
      subscribe (res => {
        this.resetForm(form);
        this.getEstudiantes();
      }); 
    } else {
      this.estudianteService.addEstudiante(form.value).
      subscribe(res => {
        this.resetForm(form);
        this.getEstudiantes();
      });
    }
  }
  getEstudiantes(){
    this.estudianteService.getEstudiantes().
    subscribe(res=>{
      this.estudianteService.estudiantes = res as Estudiante[];
      console.log(res);
    })
  }
  resetForm(form?:NgForm){
    if (form){
      form.reset();
      this.estudianteService.seleccionarEstudiante = new Estudiante();
      this.getEstudiantes();
  }
}
editEstudiante(estudiante: Estudiante){
  this.estudianteService.seleccionarEstudiante = estudiante;

}
deleteEstudiante(estudiante: Estudiante){
  if(confirm('seguro deseas eliminarlo?')){
    this.estudianteService.deleteEstudiante(estudiante)
      .subscribe(res => {
        this.getEstudiantes();
      });
  }
}}
