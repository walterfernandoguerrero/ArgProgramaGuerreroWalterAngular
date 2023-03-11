import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class IngresarPaginaService {

  private ingresarPag:boolean; //variable de control
  private miCorreo:string = '';
  private miClave:string = '';
//prueba
  private misPersonas: persona[] = [];

  constructor(private servPers: PersonaService) { }

  //funcion de verificacion de datos correctos
  public ingresarDatosPag(obj:any, x:persona[]):boolean{
    //console.log(obj);
    //pruebas de logeo
    this.miCorreo=obj.email;//esta variable se llena del input del formulario
   // console.log(this.miUsuario);
    
    this.misPersonas=x;
    //console.log(this.misPersonas)
   
    this.miClave=obj.password;
    //console.log(this.miClave);---------------------<<<<<parado

    for(let elemento of this.misPersonas){
      if(elemento.email === this.miCorreo && elemento.password === this.miClave){
        this.ingresarPag=true;
        break;
      }
      else{
        this.ingresarPag=false;
      }
      //console.log(elemento.nombre , elemento.apellido);
      //console.log(this.miCorreo , this.miClave);
    }
    return this.ingresarPag//pruebas 
  }

  //para elegir paginas si usuario es valido
  public habilitarPag(){
    return this.ingresarPag;
  }
  //para borrar la edicion valida 
  public deshabilitarPag(){
    this.ingresarPag=false; //prueba de desabilitar usuario??
  }
}
