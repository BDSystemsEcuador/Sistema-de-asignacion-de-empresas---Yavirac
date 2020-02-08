import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Empleado } from '../models/empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  seleccionarEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API="http://localhost:3000/api/empleados";
  constructor(private http: HttpClient) {

    this.seleccionarEmpleado = new Empleado();
    
   }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }
  addEmpleado(Employee: Empleado){
    return this.http.post(this.URL_API,Employee);
  }
  putEmpleado(Employee: Empleado){
    return this.http.put(this.URL_API + `/${Employee._id}`,
    Employee);
  }
  deleteEmpleado(Employee: Empleado){
    return this.http.delete(this.URL_API + `/${Employee._id}`);
  }
}
