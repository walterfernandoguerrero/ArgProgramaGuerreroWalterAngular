import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lenguajes } from 'src/app/model/lenguajes';
import { LenguajeService } from 'src/app/servicios/lenguaje.service';

@Component({
  selector: 'app-editar-lenguaje',
  templateUrl: './editar-lenguaje.component.html',
  styleUrls: ['./editar-lenguaje.component.css']
})
export class EditarLenguajeComponent implements OnInit {
 
  //validar datos
//prueba de validacion de campos en formulario ++++++++++
  lenguajeCtrl= new FormControl('',[Validators.required]);
  porcentajeCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[0-9\d]{1,2}$/)]);
  imagenCtrl = new FormControl('',[Validators.required]);
//+++++++++++++++++++++++++++++++++++++++++++++++++++
  
  lenguaje:any =new Lenguajes('',null,'');
  
  
  constructor(private lengServ: LenguajeService, private activatedRouter: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.lengServ.details(id).subscribe(
      data =>{
        this.lenguaje = data;
        console.log(data); 
      }, err =>{
        alert("Error al traer los datos");
        this.router.navigate(['']);
      }
    )
  }
  
  onCreate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
     this.lengServ.details(id).subscribe(
       data =>{
         this.lenguaje = data;
         console.log(data);
       }
     )
     this.lengServ.save(this.lenguaje).subscribe(
       data =>{
         alert("Lenguaje  Editado");
         this.router.navigate(['']);
       }
     )
   }

  

}
