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
  
  
  // boton para ir a pagina editar
  editar(): void{
    this.router.navigate(['/pagEditLenguaje/:id'])
  }

  //prueba de validacion++++++++++++++++++++++++++++++++++
  autorizado():boolean{
  return this.estaLogeado.habilitarEdicion();
  } 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//metodo para eliminar registros
borrar(id?: number){
  if(id!=undefined){
    this.lengServ.delete(id).subscribe(
      data =>{
        alert("Se elimino lenguaje de valoracion");
        this.listarLenguajes();
      }, err =>{
        alert("no se pudo eliminar");
      }
    )
  }
}

}
