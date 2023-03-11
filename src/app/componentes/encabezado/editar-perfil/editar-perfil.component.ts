import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  //mapeo
  perfil: any = new DatosPersonales('','','','','');

  // validacion de datos.

  //objeto exprecion
  expr:any ={
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  direccion: /^[a-zA-Z0-9,_.À-ÿ\s]{1,100}$/,
  telefono: /^\d{8,14}$/,
  imagen: /^.{4,250}$/
  }

  nombreCtrl = new FormControl('',[Validators.required, Validators.pattern(this.expr.nombre)]);
  correoCtrl = new FormControl('',[Validators.required, Validators.pattern(this.expr.correo)]);
  telefonoCtrl=new FormControl('',[Validators.required, Validators.pattern(this.expr.telefono)]);
  direccionCtrl= new FormControl('',[Validators.required, Validators.pattern(this.expr.direccion)]);
  imagenCtrl=new FormControl('',[Validators.required, Validators.pattern(this.expr.imagen)]);

//----------------/assets/WalterGuerreroTrabajo.jpg
  //servicio, activar la ruta con ID ,ruta 
  constructor(private servDatos: DatosPersonalesService, private activateRouter: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.params['id']
    this.servDatos.detail(id).subscribe(data =>{this.perfil = data})
  }

  onCreate(): void {
    const id= this.activateRouter.snapshot.params['id'];
    this.servDatos.detail(id).subscribe(data =>{this.perfil=data})
    this.servDatos.save(this.perfil).subscribe(data =>{
      alert("perfil editado");
      this.router.navigate(['']);
    })
  }

}
