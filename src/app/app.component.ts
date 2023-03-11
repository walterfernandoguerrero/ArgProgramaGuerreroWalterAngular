import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngresarPaginaService } from './servicios/ingresar-pagina.service';
import { LoginEdicionService } from './servicios/login-edicion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walterAngular11';

  constructor(private loginEd: LoginEdicionService , private logIngreso: IngresarPaginaService, private router:Router){}
  ngOnInit(){
    this.router.navigate(['']);
  }
  public verMenuEdicion():boolean{
    return this.loginEd.habilitarEdicion();
  }
  public ingresarPagina():boolean{
    
    return this.logIngreso.habilitarPag();
  }

}
