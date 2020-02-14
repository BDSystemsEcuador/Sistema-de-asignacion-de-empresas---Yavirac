import { Component, OnInit } from '@angular/core';
import {EmpresaService} from './empresa.service';
import { NgForm } from '@angular/forms';
import { Empresa } from '../models/empresa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TutorService} from '../tutores/tutor.service';
import { Tutor } from '../models/tutor';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  providers:[EmpresaService, TutorService]
})

export class EmpresasComponent implements OnInit {
  closeResult: string;
  constructor(private empresaService:EmpresaService, private tutorService:TutorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getEmpresas();
    this.getTutores();
  }
  
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  addTutor(form:NgForm){

    if(form.value._id){
      this.tutorService.putTutor(form.value).
      subscribe (res => {
        this.resetForm(form);
        this.getTutores();
      }); 
    } else {
      this.tutorService.addTutor(form.value).
      subscribe(res => {
        this.resetForm(form);
        this.getTutores();
      });
    }
  }
  getTutores(){
    this.tutorService.getTutores().
    subscribe(res=>{
      this.tutorService.tutores = res as Tutor[];
      console.log(res);
    })
  }

editTutor(tutor: Tutor){
  this.tutorService.seleccionarTutor = tutor;

}
deleteTutor(tutor: Tutor){
  if(confirm('seguro deseas eliminarlo?')){
    this.tutorService.deleteTutor(tutor)
      .subscribe(res => {
        this.getTutores();
      });
  }

}

  addEmpresa(form:NgForm){

    if(form.value._id){
      this.empresaService.putEmpresa(form.value).
      subscribe (res => {
        this.resetForm(form);
        this.getEmpresas();
      }); 
    } else {
      this.empresaService.addEmpresa(form.value).
      subscribe(res => {
        this.resetForm(form);
        this.getEmpresas();
      });
    }
  }
  getEmpresas(){
    this.empresaService.getEmpresas().
    subscribe(res=>{
      this.empresaService.empresas = res as Empresa[];
      console.log(res);
    })
  }
  resetForm(form?:NgForm){
    if (form){
      form.reset();
      this.empresaService.seleccionarEmpresa = new Empresa();
      this.getEmpresas();
  }
}
editEmpresa(empresa: Empresa){
  this.empresaService.seleccionarEmpresa = empresa;

}
deleteEmpresa(empresa: Empresa){
  if(confirm('seguro deseas eliminarlo?')){
    this.empresaService.deleteEmpresa(empresa)
      .subscribe(res => {
        this.getEmpresas();
      });
  }

}
}