import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../model/datos-personales';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
  
  URL = 'http://localhost:8080/datos/';

  constructor(private http: HttpClient ) {}
//traer datos
public getDatos(): Observable<DatosPersonales>{
   return this.http.get<DatosPersonales>(this.URL + `traerDatos/${27}`);
}
//traer un dato
public detail(id:number): Observable<DatosPersonales>{
  return this.http.get<DatosPersonales>(this.URL + `traerDatos/${27}`);
  
}
//grabar o editar mi perfil 
public save(perfil: DatosPersonales): Observable<any>{
  return this.http.post<any>(this.URL + 'crearDatos', perfil);
}

//borrar mi perfil
public delete(id?: number): Observable<any>{
  return this.http.delete<any>(this.URL + `delete/${id}`);
}
}
