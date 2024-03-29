import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { PersonaService } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class LoginEdicionService {

  private ingresar:boolean; //variable de control
  private miUsuario:string = '';
  private miClave:string = '';
//prueba
  private misPersonas: persona[] = [];

  constructor(private servPers: PersonaService) { }

  //funcion de verificacion de datos correctos
  public ingresarDatos(obj:any, x:persona[]):boolean{
    //pruebas de logeo
    this.miUsuario=obj.usuario;//esta variable se llena del input del formulario
    console.log(this.miUsuario);
    
    this.misPersonas=x;
    console.log(this.misPersonas)
   
    this.miClave=obj.password;
    for(let elemento of this.misPersonas){
      if(elemento.usuario === this.miUsuario && elemento.password === this.miClave){
        this.ingresar=true;
        break;
      }
      else{
        this.ingresar=false;
      }
      console.log(elemento.nombre , elemento.apellido);
      console.log(this.miUsuario , this.miClave);
    }
    return this.ingresar//pruebas 
  }

  //para elegir paginas si usuario es valido
  public habilitarEdicion(){
    return this.ingresar;
  }
  //para borrar la edicion valida 
  public deshabilitar(){
    this.ingresar=false; //prueba de desabilitar usuario??
  }

}
