import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { LoginEdicionService } from 'src/app/servicios/login-edicion.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
//traer el model
expe: Experiencia[]=[];
 //agregar al constructor el servicio
constructor(private sExperiencia: SExperienciaService, private estaLogeado: LoginEdicionService) { }//variable de tipo servicio

  ngOnInit(): void {
    this.cargarExperiencia();//metodo al inicio de la carga del componente
  }
  //funcion disparadora de lista a mi componente
  cargarExperiencia(): void { //lista es el metodo que busca en la Bd
    this.sExperiencia.lista().subscribe(data => {this.expe=data;})
  }

  //funcion para borrar tocando un boton en el html
  delete(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          alert("se Elimino la Experiencia");
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo borrar la experiencia");
        }
      )
    }
  }

   //prueba de validacion++++++++++++++++++++++++++++++++++
   autorizado():boolean{
    return this.estaLogeado.habilitarEdicion();
    } 

}
