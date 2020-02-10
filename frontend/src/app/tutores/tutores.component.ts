import { Component, OnInit } from '@angular/core';

import {TutorService} from './tutor.service';
import { NgForm } from '@angular/forms';
import { Tutor } from 'src/app/models/tutor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
  
  ,
  providers:[TutorService]

})
export class TutoresComponent implements OnInit {

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
deleteTutor(tutor: Tutor){
  if(confirm('seguro deseas eliminarlo?')){
    this.tutorService.deleteTutor(tutor)
      .subscribe(res => {
        this.getTutores();
      });
  }

}

}
