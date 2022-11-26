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
import { FormsModule } from '@angular/forms';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia/nueva-experiencia.component';
import { NuevoEstudioComponent } from './componentes/educacion/nuevo-estudio/nuevo-estudio.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';


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
    LogoArgProgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//agregar
    HttpClientModule,//agregar
    FormsModule//agregar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
