import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lenguajes } from 'src/app/model/lenguajes';
import { LenguajeService } from 'src/app/servicios/lenguaje.service';
import { LoginEdicionService } from 'src/app/servicios/login-edicion.service';

@Component({
  selector: 'app-circulo-valoracion',
  templateUrl: './circulo-valoracion.component.html',
  styleUrls: ['./circulo-valoracion.component.css']
})
export class CirculoValoracionComponent implements OnInit {

  misLenguajes: Lenguajes[]=[];
  constructor(private lengServ:LenguajeService, private estaLogeado:LoginEdicionService, private router:Router) { }

  ngOnInit(): void {
    this.listarLenguajes();
  }

  listarLenguajes():void{
    this.lengServ.lista().subscribe(data=>{
      this.misLenguajes=data;
      console.log(data);
    })
  }
  
  //prueba
  dibujo(dib: string):string{
    let imagen:string = '';
    //console.log(dib);
      switch (dib) {
        case 'HTML':
          imagen='../assets/logos/html5-logo.jpg'
          break;
        case 'CSS':
          imagen='../assets/logos/cssLlogo.png'
          break;
          case 'JavaScript':
          imagen='../assets/logos/javaScript-logo.png'
          break;
          case 'Java':
          imagen='../assets/logos/java-logo.jpg'
          break;
          case 'MySQL':
          imagen='../assets/logos/logo-mysql.png'
          break;
          case 'Angular':
          imagen='../assets/logos/angularLogo.png'
          break;
      
        default:
          break;
      }
      
    return imagen;
  }

  // boton para ir a pagina editar
  editar(): void{
    this.router.navigate(['/pagEditLenguaje/:id'])
  }

  //prueba de validacion++++++++++++++++++++++++++++++++++
  autorizado():boolean{
  return this.estaLogeado.habilitarEdicion();
  } 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

}
