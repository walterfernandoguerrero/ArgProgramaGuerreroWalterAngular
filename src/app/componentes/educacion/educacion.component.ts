import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
//traer la clase modelo
edu: Educacion[]=[];
  constructor(private servEducacion: EducacionService) { }

  ngOnInit(): void {
    //llamo a mi metodo al inicio del componente
    this.cargarEducacion();
  }
  //metodo de componente para traer los datos
  cargarEducacion():void{
    this.servEducacion.lista().subscribe(data =>{this.edu=data;})
  }

  //metodo para eliminar registros
  borrar(id?: number){
    if(id!=undefined){
      this.servEducacion.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("no se pudo eliminar")
        }
      )
    }
  }

}
