import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
//copiamos nuestro path
eduURL=environment.apiURL + 'edu/'


//vamos a importar el httpClient como variable
  constructor(private httpClient: HttpClient) { }

//metodos

//traer lista de mis datos educacion
public lista():Observable<Educacion[]>{
  return this.httpClient.get<Educacion[]>(this.eduURL+'verEstudios');//es un vector de educacion
}

//traer un dato por id
public detail(id: number): Observable<Educacion>{
  return this.httpClient.get<Educacion>(this.eduURL+`buscarEstudio/${id}`);
}

//crear un estudio
public save(educacion: Educacion): Observable<any>{
  return this.httpClient.post<any>(this.eduURL+'crearEstudio', educacion);
}

//borrar
public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.eduURL+`delete/${id}`)
}

}
