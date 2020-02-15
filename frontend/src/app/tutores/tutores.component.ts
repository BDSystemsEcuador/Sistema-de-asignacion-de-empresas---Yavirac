import { Component, OnInit } from '@angular/core';

import {TutorService} from './tutor.service';
import { NgForm } from '@angular/forms';
import { Tutor } from 'src/app/models/tutor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
  
  ,
  providers:[TutorService]

})
export class TutoresComponent implements OnInit {
  p: number = 1;

  closeResult: string;
  constructor(private tutorService:TutorService,private modalService: NgbModal) { }

  ngOnInit() {
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
  resetForm(form?:NgForm){
    if (form){
      form.reset();
      this.tutorService.seleccionarTutor = new Tutor();
      this.getTutores();
  }
}
editTutor(tutor: Tutor){
  this.tutorService.seleccionarTutor = tutor;

}
cancelar(form:NgForm){
  this.resetForm(form);
      this.getTutores();
}
deleteTutor(tutor: Tutor){
  Swal.fire({
    title: 'Eliminar Tutor',
    text:'¿Estás seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.tutorService.deleteTutor(tutor)
      .subscribe(res => {
        this.getTutores();
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
