import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarInfoComponent } from './componentes/acerca-de/editar-info/editar-info.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { NuevoEstudioComponent } from './componentes/educacion/nuevo-estudio/nuevo-estudio.component';
import { EditarPerfilComponent } from './componentes/encabezado/editar-perfil/editar-perfil.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia/nueva-experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
{path:'', component: PaginaPrincipalComponent},
{path:'login', component: LoginComponent},
{path:'paginaExp', component: NuevaExperienciaComponent},
{path:'pagNuevEdu', component: NuevoEstudioComponent},
{path:'pagEditEdu/:id', component: EditarEducacionComponent},
{path:'pagEditPerfil/:id', component: EditarPerfilComponent},
{path:'pagEditInfo/:id', component: EditarInfoComponent},
{path:'pagEditExpe/:id', component:EditarExperienciaComponent},
{path:'pagNuevoProy', component:NuevoProyectoComponent},
{path:'pagEditProy/:id', component:EditarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
