import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  //validacion forms---
  tituloCtrl= new FormControl('',[Validators.required]);
  lenguajeCtrl= new FormControl('',[Validators.required]);
  herramientasCtrl= new FormControl('',[Validators.required, Validators.maxLength(150)]);
  detalleCtrl=new FormControl('',[Validators.required, Validators.maxLength(150)]);
  gitCtrl=new FormControl('',[Validators.required, Validators.maxLength(150)]);
  //

proyecto: any = new Proyecto("","","","","");
  constructor(private proyServ: ProyectoService , private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  //traer proyecto
  cargarDatos(): void{
    const id = this.actRouter.snapshot.params['id'];
    this.proyServ.detail(id).subscribe(
      data =>{
        this.proyecto = data;
        console.log(data); 
      }, err =>{
        alert("Error al modifiacar");
        this.router.navigate(['']);
      })
  }

  //Editar datos o crearrrrrr
  onCreate(): void {
    this.proyServ.save(this.proyecto).subscribe(
      data =>{
        alert("Proyecto Editada");
        this.router.navigate(['']);
      }
    )
  }//funcion

}


