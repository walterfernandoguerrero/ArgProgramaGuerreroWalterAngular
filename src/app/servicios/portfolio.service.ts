import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }
  obtenerDatos(){
    console.log("hola mundo Angular y boquenses");
    console.log("soy un servicio");
  }
}
