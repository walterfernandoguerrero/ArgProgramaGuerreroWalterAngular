import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { LoginEdicionService } from 'src/app/servicios/login-edicion.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variables
  public myForm: FormGroup;
  public listaUsuarios:persona[]= [];

  constructor(private svPer:PersonaService  ,private router:Router, private fb:FormBuilder, private validarUsuario: LoginEdicionService ) { }

  ngOnInit(): void {
    this.myForm=this.createMyForm();
    this.cargarUsuarios();
    
  }
//funcion
  private createMyForm():FormGroup{
    //fb puede ser vacio o con datos para el formuulario de login
    return this.fb.group({
      usuario:[''],
      password:['']
    });
  }

  public submitFormulario(){
    
    console.log(this.myForm.value);
    //console.log(this.listaUsuarios);
    if(!this.validarUsuario.ingresarDatos(this.myForm.value, this.listaUsuarios)){ //aqui se llena el objeto del formulario
      alert('no son validos usuario y clave no podra editar el porfolio solo leer');
      this.principal();//vuelvo al pagina principal
    }
    else{
      alert('usuario y clave correctos esta autorizado a editar el formulario');
      this.principal();
    }
    
  }
  
  login(){

    this.router.navigate(['/login'])//para ir al componente
  }

  principal(){
    this.router.navigate(['']); //para volver al principio de la pagina 
  }

  cargarUsuarios(): void {
    this.svPer.lista().subscribe(data =>{this.listaUsuarios=data})

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
