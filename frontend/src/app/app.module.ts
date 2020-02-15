import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { EmpresasComponent } from '../app/empresas/empresas.component';
import { TutoresComponent } from '../app/tutores/tutores.component';
import { AsignacionComponent } from '../app/asignacion/asignacion.component';
import { ListadopdfComponent } from '../app/listadopdf/listadopdf.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstudiantesComponent } from "../app/estudiantes/estudiantes.component";
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    NavbarComponent,
    EmpresasComponent,
    TutoresComponent,
    AsignacionComponent,
    ListadopdfComponent,
    LoginComponent,
    InicioComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent,],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
