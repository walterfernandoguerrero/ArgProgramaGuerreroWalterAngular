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
  public carga: boolean;
  

  constructor(private svPer:PersonaService,  private fb:FormBuilder, private svIngPag: IngresarPaginaService ) {
    this.carga=true
   }

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
      alert('no son validos email y clave o el servicio gratuito esta cargando los servicios');
      //this.reset();
    }
    
    
  }

  //traer datos de la bd personas
  cargarUsuarios(): void {
    //this.carga=true;
    console.log(this.carga);
    this.svPer.lista().subscribe(data =>{this.listaUsuarios=data;
    this.carga=false;
    }
      );
    //this.carga=false;
    console.log(this.carga);

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
