import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { persona } from 'src/app/model/persona.model';
import { IngresarPaginaService } from 'src/app/servicios/ingresar-pagina.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  //variables
  public myForm: FormGroup;
  public listaUsuarios:persona[]= [];

  constructor(private svPer:PersonaService,  private fb:FormBuilder, private svIngPag: IngresarPaginaService ) { }

  ngOnInit(): void {
    this.myForm=this.createMyForm();
    this.cargarUsuarios();
  }

  //funcion
  private createMyForm():FormGroup{
    //fb puede ser vacio o con datos para el formuulario de login
    return this.fb.group({
      email:[''],
      password:['']
    });
  }
  //funcion de habilitar logeo
  public submitFormulario(){
    
    console.log(this.myForm.value);
    //console.log(this.listaUsuarios);
    if(!this.svIngPag.ingresarDatosPag(this.myForm.value, this.listaUsuarios)){ //aqui se llena el objeto del formulario
      alert('no son validos email y clave o el servicio no esta conectado a la red');
      this.reset();
    }
    
    
  }

  //traer datos de la bd personas
  cargarUsuarios(): void {
    this.svPer.lista().subscribe(data =>{this.listaUsuarios=data})

  }
  reset(){
    this.myForm.reset();
  }

  verClave(){
   let elemento: any = document.getElementById('pasw');
    if(elemento.type=='password')
    {
      elemento.type = 'text';
    }
    else
    {
      elemento.type='password';
    }
  }

}
