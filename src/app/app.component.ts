import { Component } from '@angular/core';
import { LoginEdicionService } from './servicios/login-edicion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walterAngular11';

  constructor(private loginEd: LoginEdicionService){}

  public verMenuEdicion():boolean{
    return this.loginEd.habilitarEdicion()
  }

}
