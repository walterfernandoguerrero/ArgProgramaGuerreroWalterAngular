import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  //variable para el path
  expURL = 'http://localhost:8080/explab/'

              //variable 
  constructor(private httpClient: HttpClient) { }

  //metodos

  //listar esperiencias aca un vector 
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'verExperiencias')//array de datos
  }
  //crear una experiencia
  public crearExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'nuevaExperiencia', experiencia); //mi path
  }

  //borrar una experiencia
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL+`borrarExperiencia/${id}`);
  }
}
