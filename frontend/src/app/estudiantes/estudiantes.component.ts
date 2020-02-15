import { Component, OnInit } from '@angular/core';
import {EstudianteService} from '../estudiantes/estudiante.service';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../models/estudiante';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {EmpresaService} from '../empresas/empresa.service';
import { Empresa } from '../models/empresa';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
  providers:[EstudianteService, EmpresaService]
})
export class EstudiantesComponent implements OnInit {
  
  p: number = 1;
  closeResult: string;
  constructor(private empresaService:EmpresaService,private estudianteService:EstudianteService,private modalService: NgbModal) { }
  
  ngOnInit() {
    this.getEstudiantes();
    this.getEmpresas();
  }
  getEmpresas(){
    this.empresaService.getEmpresas().
    subscribe(res=>{
      this.empresaService.empresas = res as Empresa[];
      console.log(res);
    })
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
      this.estudianteService.addEstudiante(form.value).
      subscribe(res => {
        this.resetForm(form);
        this.getEstudiantes();
      });
      let timerInterval
      Swal.fire({
        title: 'Agregando...',
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

  }
  getEstudiantes(){
    this.estudianteService.getEstudiantes().
    subscribe(res=>{
      this.estudianteService.estudiantes = res as Estudiante[];
      console.log(res);
    })
  }
  cancelar(form:NgForm){
    this.resetForm(form);
        this.getEstudiantes();
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
 
  Swal.fire({
    title: 'Eliminar Estudiante',
    text:'¿Estás seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.estudianteService.deleteEstudiante(estudiante)
      .subscribe(res => {
        this.getEstudiantes();
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
