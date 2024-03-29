import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
nombreExp: string ='';
descripcionExp: string ='';

//prueba de validacion de campos en formulario ++++++++++
empresaCtrl= new FormControl('',[Validators.required]);
puestoCtrl = new FormControl('',[Validators.required]);
//+++++++++++++++++++++++++++++++++++++++++++++++++++


  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
//metodo para crear una nueva experiencia
  onCreate(): void{
    const expe = new Experiencia(this.nombreExp, this.descripcionExp);//construciionde metodo variable
    this.sExperiencia.crearExperiencia(expe).subscribe(data =>{
      alert("se creo nueva experiencia");
      this.router.navigate(['']);
    },Error =>{
      alert('no se pudo crear');
      this.router.navigate(['']);
    }
    )
  }
}
