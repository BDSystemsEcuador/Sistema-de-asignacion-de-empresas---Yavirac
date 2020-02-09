import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { EmpresasComponent } from './empresas/components/empresas.component';
import { TutoresComponent } from './tutores/components/tutores/tutores.component';
import { AsignacionComponent } from './asignacion/components/asignacion/asignacion.component';
import { ListadopdfComponent } from './listadopdf/components/listadopdf/listadopdf.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstudiantesComponent } from "./estudiantes/components/estudiantes.component";
@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    NavbarComponent,
    FooterComponent,
    EmpresasComponent,
    TutoresComponent,
    AsignacionComponent,
    ListadopdfComponent,
    LoginComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
