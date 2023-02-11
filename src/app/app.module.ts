import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AptitudesValoracionComponent } from './componentes/aptitudes-valoracion/aptitudes-valoracion.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia/nueva-experiencia.component';
import { NuevoEstudioComponent } from './componentes/educacion/nuevo-estudio/nuevo-estudio.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculoValoracionComponent } from './componentes/circulo-valoracion/circulo-valoracion.component';
import { EditarPerfilComponent } from './componentes/encabezado/editar-perfil/editar-perfil.component';
import { EditarInfoComponent } from './componentes/acerca-de/editar-info/editar-info.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
//import { NuevaEducacionComponent } from './componentes/proyectos/nueva-educacion/nueva-educacion.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { CirculoLogrosComponent } from './componentes/circulo-logros/circulo-logros.component';
import { EditarLenguajeComponent } from './componentes/circulo-valoracion/editar-lenguaje/editar-lenguaje.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    AptitudesValoracionComponent,
    LogrosComponent,
    ProyectosComponent,
    PiePaginaComponent,
    PaginaPrincipalComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    NuevoEstudioComponent,
    EditarEducacionComponent,
    LogoArgProgComponent,
    CirculoValoracionComponent,
    EditarPerfilComponent,
    EditarInfoComponent,
    EditarExperienciaComponent,
    //NuevaEducacionComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    CirculoLogrosComponent,
    EditarLenguajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//agregar
    HttpClientModule,//agregar
    FormsModule,  //agregar
    NgCircleProgressModule.forRoot({}),   //agregar
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
