import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {
  
  //validaciones formularios
  establecimientoCtrl= new FormControl('',[Validators.required]);
  tituloCtrl = new FormControl('',[Validators.required]);
  //-----

  nombreEdu: string= '';
  descripcionEdu: string ='';

  constructor(private servEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const educacion= new Educacion(this.nombreEdu, this.descripcionEdu)
    this.servEducacion.save(educacion).subscribe(
      data =>{
        alert("Educacion agregada correctamente");
        this.router.navigate(['']);
      }
    )

  }

}
