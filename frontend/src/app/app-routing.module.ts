import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TutoresComponent } from './tutores/tutores.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ListadopdfComponent } from './listadopdf/listadopdf.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'tutores', component: TutoresComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'asignacion', component: AsignacionComponent},
  { path: 'reporte', component: ListadopdfComponent},
  { path: '**', redirectTo: 'login'},
  { path: '', redirectTo: '/login', pathMatch: 'prefix' },

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
