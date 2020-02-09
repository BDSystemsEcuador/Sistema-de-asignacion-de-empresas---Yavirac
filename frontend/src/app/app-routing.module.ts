import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TutoresComponent } from './tutores/components/tutores/tutores.component';
import { EmpresasComponent } from './empresas/components/empresas/empresas.component';
import { AsignacionComponent } from './asignacion/components/asignacion/asignacion.component';
import { EmpleadosComponent } from './estudiantes/components/empleados.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'estudiantes', component: EmpleadosComponent},
  { path: 'tutores', component: TutoresComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'asignacion', component: AsignacionComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

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
