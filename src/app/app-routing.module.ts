import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { NuevoEstudioComponent } from './componentes/educacion/nuevo-estudio/nuevo-estudio.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia/nueva-experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';

const routes: Routes = [
{path:'', component: PaginaPrincipalComponent},
{path:'login', component: LoginComponent},
{path:'paginaExp', component: NuevaExperienciaComponent},
{path:'pagNuevEdu', component: NuevoEstudioComponent},
{path:'pagEditEdu/:id', component: EditarEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
