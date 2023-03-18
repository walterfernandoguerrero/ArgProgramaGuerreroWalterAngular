import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lenguajes } from 'src/app/model/lenguajes';
import { LenguajeService } from 'src/app/servicios/lenguaje.service';

@Component({
  selector: 'app-nuevo-lenguaje',
  templateUrl: './nuevo-lenguaje.component.html',
  styleUrls: ['./nuevo-lenguaje.component.css']
})
export class NuevoLenguajeComponent implements OnInit {

//validar datos
//prueba de validacion de campos en formulario ++++++++++
lenguajeCtrl= new FormControl('',[Validators.required]);
porcentajeCtrl = new FormControl('',[Validators.required, Validators.pattern(/^[0-9\d]{1,2}$/)]);
imagenCtrl = new FormControl('',[Validators.required]);
//+++++++++++++++++++++++++++++++++++++++++++++++++++

nombreLenguaje="";
porcentaje=0;
urlImagen="";


constructor(private lengServ: LenguajeService, private activatedRouter: ActivatedRoute,
   private router:Router) { }
  ngOnInit(): void {
  }

  onCreate():void{
   const lenguaje= new Lenguajes(this.nombreLenguaje, this.porcentaje, this.urlImagen)
    this.lengServ.save(lenguaje).subscribe(
      data =>{
        alert("Lenguaje agregado correctamente");
        this.router.navigate(['']);
      }
    )
  }
}
