import { Component, OnInit } from '@angular/core';
import {EmpresaService} from './empresa.service';
import { NgForm } from '@angular/forms';
import { Empresa } from '../models/empresa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TutorService} from '../tutores/tutor.service';
import { Tutor } from '../models/tutor';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  providers:[EmpresaService, TutorService]
})

export class EmpresasComponent implements OnInit {
  p: number = 1;

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
      let timerInterval
      Swal.fire({
        title: 'Editando...',
        timer: 1000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.querySelector('strong')
                .textContent = Swal.getTimerLeft().toString()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    } else {
      this.empresaService.addEmpresa(form.value).
      subscribe(res => {
        this.resetForm(form);
        this.getEmpresas();
      });
    }
    let timerInterval
    Swal.fire({
      title: 'Editando...',
      timer: 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.querySelector('strong')
              .textContent = Swal.getTimerLeft().toString()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }
  getEmpresas(){
    this.empresaService.getEmpresas().
    subscribe(res=>{
      this.empresaService.empresas = res as Empresa[];
      console.log(res);
    })
  }
  cancelar(form:NgForm){
    this.resetForm(form);
        this.getEmpresas();
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
  Swal.fire({
    title: 'Eliminar Empresa',
    text:'¿Estás seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.empresaService.deleteEmpresa(empresa)
      .subscribe(res => {
        this.getEmpresas();
      });
      Swal.fire(
        'Eliminado',
        '',
        'success'
      )
    }
  })

}
}

