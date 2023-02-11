import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { LoginEdicionService } from 'src/app/servicios/login-edicion.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proy: Proyecto[]=[];

  constructor(private proyServi: ProyectoService, private estaLogeado:LoginEdicionService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.proyServi.lista().subscribe(data =>{this.proy=data})

  }

  //funcion para borrar tocando un boton en el html
  delete(id?:number){
    if(id != undefined){
      this.proyServi.delete(id).subscribe(
        data => {
          alert("se Elimino el proyecto");
          this.cargarProyectos();
        }, err =>{
          alert("no se pudo borrar el proyecto");
        }
      )
    }
  }

  //prueba de validacion++++++++++++++++++++++++++++++++++
  autorizado():boolean{
    return this.estaLogeado.habilitarEdicion();
    } 

}
