import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  //validacion forms---
  tituloCtrl= new FormControl('',[Validators.required]);
  lenguajeCtrl= new FormControl('',[Validators.required]);
  herramientasCtrl= new FormControl('',[Validators.required, Validators.maxLength(150)]);
  detalleCtrl=new FormControl('',[Validators.required, Validators.maxLength(150)]);
  gitCtrl=new FormControl('',[Validators.required, Validators.maxLength(150)]);
  //

titulo="";
lenguaje="";
herramientas="";
detalle="";
git="";
  
constructor(private servProy: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.titulo, this.lenguaje, this.herramientas, this.detalle, this.git);
    this.servProy.save(proyecto).subscribe(data =>{
      alert("Proyecto agregado");
      this.router.navigate([''])
    })
  }


}

