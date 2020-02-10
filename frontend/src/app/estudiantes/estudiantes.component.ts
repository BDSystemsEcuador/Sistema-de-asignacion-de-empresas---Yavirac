import { Component, OnInit } from '@angular/core';
import {EstudianteService} from '../estudiantes/estudiante.service';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../models/estudiante';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  providers:[EstudianteService]
})
export class EstudiantesComponent implements OnInit {
  
  closeResult: string;
  constructor(private estudianteService:EstudianteService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getEstudiantes();
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
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

}
}
