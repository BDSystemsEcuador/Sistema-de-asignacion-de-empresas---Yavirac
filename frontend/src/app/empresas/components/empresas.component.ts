import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../services/empresa.service';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/empresas/models/empresa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})

export class EmpresasComponent implements OnInit {
  closeResult: string;
  constructor(private empresaService:EmpresaService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getEmpresas();
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
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
