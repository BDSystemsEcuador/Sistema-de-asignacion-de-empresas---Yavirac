import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Estudiante } from '../models/estudiante';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  seleccionarEstudiante: Estudiante;
  estudiantes: Estudiante[];
  readonly URL_API="http://localhost:3000/api/estudiantes";
  constructor(private http: HttpClient) {

    this.seleccionarEstudiante = new Estudiante();
    
   }

  getEstudiantes(){
    return this.http.get(this.URL_API);
  }
  addEstudiante(Employee: Estudiante){
    return this.http.post(this.URL_API,Employee);
  }
  putEstudiante(Employee: Estudiante){
    return this.http.put(this.URL_API + `/${Employee._id}`,
    Employee);
  }
  deleteEstudiante(Employee: Estudiante){
    return this.http.delete(this.URL_API + `/${Employee._id}`);
  }
}
