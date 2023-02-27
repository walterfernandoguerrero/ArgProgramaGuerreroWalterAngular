import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { persona } from 'src/app/model/persona.model';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';
import { LoginEdicionService } from 'src/app/servicios/login-edicion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  //para logearme
  loginValido:boolean = false;//*********

  datos: DatosPersonales = new DatosPersonales (" "," "," "," "," ");
  
  constructor(private datosServ: DatosPersonalesService, private router:Router, private logeado:LoginEdicionService ) { }

  ngOnInit(): void {
    //prueba de login *******************
    if(this.logeado.habilitarEdicion()){
      this.loginValido=true;
    }else{
      this.loginValido=false;
    } //para login **********************
//traer datos 
    this.datosServ.getDatos().subscribe(data => {this.datos = data
    console.log(this.datos)})
  }
  
//no borrar
  login(): void{
    this.router.navigate(['/login'])
  }
  // boton para ir a pagina editar
  editar(): void{
    this.router.navigate(['/pagEditPerfil/:id'])
  }

  //volver a pagina sin editar
  cerrarSesion(){
   this.loginValido=false;
    this.router.navigate(['']);
    this.logeado.deshabilitar();
  }

}
