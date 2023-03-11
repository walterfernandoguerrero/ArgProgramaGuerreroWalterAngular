import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  //validacion forms
  establecimientoCtrl= new FormControl('',[Validators.required]);
  tituloCtrl = new FormControl('',[Validators.required]);
  //-----


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
        alert("Error al Cargar los Datos");
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
