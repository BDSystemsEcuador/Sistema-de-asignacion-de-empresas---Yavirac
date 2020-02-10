import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Tutor } from '../models/tutor';
@Injectable({
  providedIn: 'root'
})
export class TutorService {

  seleccionarTutor: Tutor;
  tutores: Tutor[];
  readonly URL_API="http://localhost:3000/api/tutores";
  constructor(private http: HttpClient) {

    this.seleccionarTutor = new Tutor();
    
   }

  getTutores(){
    return this.http.get(this.URL_API);
  }
  addTutor(Employee: Tutor){
    return this.http.post(this.URL_API,Employee);
  }
  putTutor(Employee: Tutor){
    return this.http.put(this.URL_API + `/${Employee._id}`,
    Employee);
  }
  deleteTutor(Employee: Tutor){
    return this.http.delete(this.URL_API + `/${Employee._id}`);
  }
}
