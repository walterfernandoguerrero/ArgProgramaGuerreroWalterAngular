import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  
  //validaciones
  empresaCtrl= new FormControl('',[Validators.required]);
  puestoCtrl = new FormControl('',[Validators.required]);
  //----

  expe: any = new Experiencia('','');
  constructor(private expServi: SExperienciaService, private actRouter:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  //traer datos
  cargarDatos(): void{
    const id = this.actRouter.snapshot.params['id'];
    this.expServi.detail(id).subscribe(
      data =>{
        this.expe = data;
        console.log(data); 
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  //Editar datos o crearrrrrr
  onCreate(): void {
     this.expServi.crearExperiencia(this.expe).subscribe(
       data =>{
         alert("Experiencia Editada");
         this.router.navigate(['']);
       }
     )
   }//funcion

 } 



/**
educacion: any= new Educacion('','');

  constructor(private servEducacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router ) { }
    
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacion.detail(id).subscribe(
      data =>{
        this.educacion = data;
        console.log(data); 
      }, err =>{
        alert("Error al modifiacar");
        this.router.navigate(['']);
      }
    )
  }
  onCreate(): void {
   const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacion.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }
    )
    this.servEducacion.save(this.educacion).subscribe(
      data =>{
        alert("Educacion Editada");
        this.router.navigate(['']);
      }
    )
  }
} 

 */