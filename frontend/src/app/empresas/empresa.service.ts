import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Empresa } from '../models/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  seleccionarEmpresa: Empresa;
  empresas: Empresa[];
  readonly URL_API="http://localhost:3000/api/empresas";
  constructor(private http: HttpClient) {

    this.seleccionarEmpresa = new Empresa();
    
   }

  getEmpresas(){
    return this.http.get(this.URL_API);
  }
  addEmpresa(Employee: Empresa){
    return this.http.post(this.URL_API,Employee);
  }
  putEmpresa(Employee: Empresa){
    return this.http.put(this.URL_API + `/${Employee._id}`,
    Employee);
  }
  deleteEmpresa(Employee: Empresa){
    return this.http.delete(this.URL_API + `/${Employee._id}`);
  }
}
