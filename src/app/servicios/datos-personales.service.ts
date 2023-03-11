import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DatosPersonales } from '../model/datos-personales';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
  
  URL = environment.apiURL + 'datos/';

  constructor(private http: HttpClient ) {}
//traer datos
public getDatos(): Observable<DatosPersonales>{
   return this.http.get<DatosPersonales>(this.URL + `traerDatos/${27}`);//es el id de la tabla tener en cuenta en deploy
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
